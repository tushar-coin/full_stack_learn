import { SqlEntityManager,PostgreSqlDriver,EntityManager,Connection } from "@mikro-orm/postgresql"

// SqlEntityManager
export  type MyContext = {
    em : EntityManager
}

//SqlEntityManager<PostgreSqlDriver> & EntityManager<IDatabaseDriver<Connection>