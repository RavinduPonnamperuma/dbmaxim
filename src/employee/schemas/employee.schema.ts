import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";  
import { Department } from "src/department/Schemas/dipartment.schema";

@Schema()
export class Name{
    @Prop()
    title:string;
    
    @Prop()
    initials:string;

    @Prop()
    last:string;

    @Prop()
    middle:string;

    @Prop()
    first:string;
}


@Schema()
export class Employee {

    @Prop({ required: true })
    Emp_ID: number;

    @Prop({ required: true })
    empCode: string;

    @Prop()
    name: Name;

    @Prop({ type: Types.ObjectId, ref: 'Department', foreignField: "Department_ID"})
    Department: Department;

    @Prop({ required: true })
    email: string;

    @Prop()
    contactNo: string;

    @Prop()
    status: string;

    @Prop()
    createdAt: string;

    @Prop()
    updatedAt: string;

    @Prop()
    deletedAt:string;

   


}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)


