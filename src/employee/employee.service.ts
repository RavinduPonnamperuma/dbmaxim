import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { updateEmployee } from './dto/update-employee.dto';
import { createEmployee } from './dto/create-employee.dto';
import { Department } from 'src/department/Schemas/dipartment.schema';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectModel("Employee")
        private emp: mongoose.Model<Employee>,
        @InjectModel("Department")
        private departmentModel: mongoose.Model<Department>
    ) { }

    async findAll(): Promise<Employee[]> {
        const employes = await this.emp.find();
        return employes;
    }

    async create(employee: createEmployee): Promise<Employee> {
        const Dept_Id = employee.Department_Id
        const Department = await this.departmentModel.findOne({ Department_ID: Dept_Id })

        if (!Department) {
            throw new NotFoundException('Department not found..!!')
        }
        //create object we want to save 
        const Employee = {
            Emp_ID: employee.Emp_ID,
            First_Name: employee.First_Name,
            Last_Name: employee.Last_Name,
            Email: employee.Email,
            NIC: employee.NIC,
            Join_Date: employee.Join_Date,
            DOB: employee.DOB,
            Gender: employee.Gender,
            Department: Department

        }
        const res = await this.emp.create(Employee)
        return res
    }

    async findEmployeeWithDepartment(Emp_ID: number): Promise<Employee> {
        // const id=parseInt(Emp_ID)
        // const employes = await this.emp.findOne({Emp_ID:Emp_ID}).populate({ path: 'Department', model: 'Department', select: 'Name', })

        const employes = await this.emp.findOne({ Emp_ID: Emp_ID }).populate("Department")
        if (!employes) {
            throw new NotFoundException('Employee not found..!!')
        }
        return employes;
    }

    async updateEmp(Emp_ID: number, employee: updateEmployee): Promise<Employee> {
        return await this.emp.findOneAndUpdate({ Emp_ID: Emp_ID }, employee, { new: true }).exec();



    }

    async deleteById(Emp_ID: number): Promise<Employee> {
        return await this.emp.findOneAndDelete({ Emp_ID: Emp_ID })
    }
}
