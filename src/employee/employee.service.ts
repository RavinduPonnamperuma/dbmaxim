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
        const Dept_Id = employee.Emp_ID
        const Department = await this.departmentModel.findOne({ Department_ID: Dept_Id })

        if (!Department) {
            throw new NotFoundException('Department not found..!!')
        }
        //create object we want to save 
        const Employee = {
            Emp_ID: employee.Emp_ID,
            empCode: employee.empCode,
            name: employee.name,
            Department: Department,
            email: employee.email,
            contactNo: employee.contactNo,
            status: employee.status,
            createdAt: employee.createdAt,
            updatedAt: employee.updatedAt,
            deletedAt:employee.deletedAt
            

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
