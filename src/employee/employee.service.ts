import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeeService {
    // deleteByID(Emp_ID: string): Employee | PromiseLike<Employee> {
    //     throw new Error('Method not implemented.');
    // }
    //             runValidators:true,
    //         });
    // }
    // async deleteById(id:string):Promise<Book>{
    //     return await this.bookModel.findByIdAndDelete(id)
    // }
    constructor(
        @InjectModel(Employee.name)
        private emp: mongoose.Model<Employee>
    ){}
    
    async findAll():Promise<Employee[]>{
        const employes = await this.emp.find();
        return employes;   
    }

    async create(employee:Employee):Promise<Employee>{
        const res = await this.emp.create(employee)
        return res
    }

    async findById(Emp_ID:number):Promise<Employee>{
        const employes = await this.emp.findOne({Emp_ID:Emp_ID})
        if(!employes){
            throw new NotFoundException('Employee not found..!!')
        }
        return employes;
    }

    async updateEmp(Emp_ID:number,employee:Employee):Promise<Employee>{
        return await this.emp.findOneAndUpdate({ Emp_ID: Emp_ID },employee,{ new: true }).exec();
        
        
       
    }

    async deleteById(Emp_ID:number):Promise<Employee>{
        return await this.emp.findOneAndDelete({Emp_ID:Emp_ID})
    }
}
