import {Entity,PrimaryKey,Property} from "@mikro-orm/core"
import { Field, Int } from "type-graphql";


@Entity()
export  class Student {

    @Field(()=>Int)
    @PrimaryKey()
    id!:number;

    @Field(()=>String)
    @Property()
    name!: string;
}