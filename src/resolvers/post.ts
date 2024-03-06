import { Student } from "src/entites/student";
import { MyContext } from "src/types";
import { Resolver,Query, Ctx } from "type-graphql";

@Resolver()
export class StudentResolver{
    @Query(() => [Student])
    students(
        @Ctx() {em}: MyContext
    ){
        return em.find(Student,{});
    }
}