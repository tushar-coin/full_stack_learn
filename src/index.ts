import {MikroORM,EntityManager} from "@mikro-orm/core"
const main=async ()=>{
    const orm = await MikroORM.init({
        dbName:'',
        type:'postgres',
        debug:true
    })
};

main()