import { MikroORM } from '@mikro-orm/core';
import  express  from 'express';
import { ApolloServer } from 'apollo-server-express';
// import {Student} from './entites/student';
import microconfig from "./mikro-orm.config";
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { StudentResolver } from './resolvers/post';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
async function run() {
    const orm = await MikroORM.init<PostgreSqlDriver>(microconfig);
    // const fork = orm.em.fork();
    // const student1=fork.create(Student,{id:4,name:'tushar'});
    // await fork.persistAndFlush(student1);
    const app=express();
    const apolloServer=new ApolloServer({
      schema : await buildSchema({
        resolvers:[HelloResolver,],
        validate:false,
      }),
      context:()=>({em :orm.em})
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
    app.get('/',(_,res)=>{
      res.send("heeelo");
    })
    app.listen(4000,()=>{
      console.log("successfully running");
    })

  }
  
  run();