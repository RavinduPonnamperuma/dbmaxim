import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Department{
    @Prop()
    Department_ID: number;

    @Prop()
    Name:string;

    @Prop()
    Job_Role:string;

    @Prop()
    Job_Code: string;

}
export const DepartmentSchema = SchemaFactory.createForClass(Department)
