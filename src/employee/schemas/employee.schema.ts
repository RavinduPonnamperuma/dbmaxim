import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Department } from "src/department/Schemas/dipartment.schema";



@Schema({
    timestamps: true
})
export class Employee {

    @Prop()
    Emp_ID: number;

    @Prop({ required: true })
    First_Name: string;

    @Prop()
    Last_Name: string;

    @Prop({ required: true })
    Email: string;

    @Prop()
    NIC: string;

    @Prop()
    Join_Date: Date;

    @Prop()
    DOB: Date;

    @Prop()
    Gender: string;

    @Prop({ type: Types.ObjectId, ref: 'Department', foreignField: "Department_ID" })
    Department: Department;


}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)


