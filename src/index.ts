import { MikroORM } from '@mikro-orm/core';
import  express  from 'express';
import {Student} from './entites/student';
import microconfig from "./mikro-orm.config";
async function run() {
    const orm = await MikroORM.init(microconfig);
    const fork = orm.em.fork();
    // const student1=fork.create(Student,{id:4,name:'tushar'});
    // await fork.persistAndFlush(student1);
    const app=express();
    app.get('/',(_,res)=>{
      res.send("heeelo");
    })
    app.listen(4000,()=>{
      console.log("successfully running");
    })

  }
  
  run();