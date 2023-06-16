import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './Schemas/dipartment.schema';
import { createDepartment } from './dto/create-Department.dto';
import { updateDepartment } from './dto/update-Department.dto';

@Controller('department')
export class DepartmentController {
    departmentService: any;
    constructor(private readonly department:DepartmentService){}

    @Get()
    async getAllDepartment(): Promise<Department[]>{
        return this.department.findAll()
    }

    @Post()
    async createDep(@Body()department:createDepartment):Promise<Department>{
        return this.department.create(department)
    }

    @Get(':Department_ID')
    async getDipById(@Param('Department_ID')Department_ID:string): Promise<Department>{
        return this.department.findById(parseInt(Department_ID));
    }

    @Put(':Department_ID')
    async updateDep(@Param('Department_ID') Department_ID:string, @Body()Department:updateDepartment):Promise<Department>{
        return this.department.updateDep(parseInt(Department_ID),Department);
    }

    @Delete(':Department_ID')
    async deleteDep(@Param('Department_ID') Department_ID:string): Promise<Department>{
        return this.department.deleteById(parseInt(Department_ID))
    }


     
}
