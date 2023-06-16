import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Department } from './Schemas/dipartment.schema';
import * as mongoose from 'mongoose';
import { updateDepartment } from './dto/update-Department.dto';
import { createDepartment } from './dto/create-Department.dto';

@Injectable()
export class DepartmentService {
    
    constructor(
        @InjectModel(Department.name)
        private DepModel: mongoose.Model<Department>
    ){}
         
    async findAll():Promise<Department[]>{
        const department = await this.DepModel.find();
        return department;   
    }

    async create(department:createDepartment):Promise<Department>{
        const res = await this.DepModel.create(department)
        return res
    }

    async findById(Department_ID:number):Promise<Department>{
        const department = await this.DepModel.findOne({Department_ID:Department_ID})
        if(!department){
            throw new NotFoundException('Department not found..!!')
        }
        return department;
    }

    async updateDep(Department_ID:number,department:updateDepartment):Promise<Department>{
        return await this.DepModel.findOneAndUpdate({ Department_ID:Department_ID },department,{ new: true }).exec();
     
    }

    async deleteById(Department_ID:number):Promise<Department>{
        return await this.DepModel.findOneAndDelete({Department_ID:Department_ID})
    }

}
