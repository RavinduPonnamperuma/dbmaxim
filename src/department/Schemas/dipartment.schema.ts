import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { type } from "os";
import { Employee } from "src/employee/schemas/employee.schema";

export type EmployeeDocument = Employee & Document;
@Schema()
export class Department {
    @Prop()
    Department_ID: number;

    @Prop({ required: true })
    Name: string;

    @Prop({ required: true })
    Job_Role: string;

    @Prop({ required: true })
    Job_Code: string;

    // @Prop({ type: [{ type: Types.ObjectId, ref: 'Employee' }] })
    // employees: Employee[];

}
export const DepartmentSchema = SchemaFactory.createForClass(Department)

