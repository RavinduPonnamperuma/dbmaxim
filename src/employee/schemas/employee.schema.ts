import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true
})
export class   Employee{
    @Prop()
    Emp_ID: number;

    @Prop()
    First_Name:string;

    @Prop()
    Last_Name:string;

    @Prop()
    Email: string;

    @Prop()
    Department_ID: string;
    
    @Prop()
    NIC: string;
    
    @Prop()
    Join_Date: Date;

    @Prop()
    DOB: Date;

    @Prop()
    Gender:string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)