import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { type } from "os";
import { Employee } from "src/employee/schemas/employee.schema";

export type EmployeeDocument = Employee & Document;
@Schema()
export class Department {
    @Prop({required:true})
    Department_ID: number;

    @Prop({ required: true })
    deptCode: string;

    @Prop({ required: true })
    deptName: string;

    @Prop()
    status: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updateAt: Date;

    @Prop()
    deletedAt: Date;

    // @Prop({ type: [{ type: Types.ObjectId, ref: 'Employee' }] })
    // employees: Employee[];

}
export const DepartmentSchema = SchemaFactory.createForClass(Department)

