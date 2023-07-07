import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Employee } from "src/employee/schemas/employee.schema";


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
export class Visitor{
    @Prop()
    visitorType:string;

    @Prop()
    name:Name;

    @Prop()
    nicno:string;

    @Prop()
    contectno:string;

    @Prop()
    email:string;

    @Prop()
    status:string;

    // @Prop()
    // requestedBy:;

    @Prop({ type: Types.ObjectId, ref: 'Employee', foreignField: "empCode"})
    requestedBy: Employee;

    // @Prop()
    // contactPerson:string;

    @Prop({ type: Types.ObjectId, ref: 'Employee', foreignField: "empCode"})
    contactPerson: Employee;

    // @Prop()
    // createdBy:string;

    @Prop({ type: Types.ObjectId, ref: 'Employee', foreignField: "empCode"})
    createdBy: Employee;

    @Prop()
    createdAt:Date;

    @Prop()
    updatedAt:Date;

    @Prop()
    deletedAt:Date;



}
export const VisitorSchema = SchemaFactory.createForClass(Visitor)