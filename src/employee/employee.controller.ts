import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {createEmployee}from './dto/create-employee.dto'
import { Employee } from './schemas/employee.schema';
import {updateEmployee} from './dto/update-employee.dto'


@Controller('employees')
export class EmployeeController {
    constructor(private employeeService:EmployeeService){}

    @Get()
    async getAllEmp(): Promise<Employee[]>{
        return this.employeeService.findAll()
    }

    @Post()
    async createEmp(@Body()employee:createEmployee):Promise<Employee>{
        return this.employeeService.create(employee)
    }

    @Get(':Emp_ID')
    async getEmpById(@Param('Emp_ID')Emp_ID:string): Promise<Employee>{
        return this.employeeService.findById(parseInt(Emp_ID));
    }

    @Put(':Emp_ID')
    async updateEmp(@Param('Emp_ID') Emp_ID:string, @Body()employee:updateEmployee):Promise<Employee>{
        return this.employeeService.updateEmp(parseInt(Emp_ID),employee);
    }

    @Delete(':Emp_ID')
    async deleteEmp(@Param('Emp_ID') Emp_ID:string): Promise<Employee>{
        return this.employeeService.deleteById(parseInt(Emp_ID))
    }


    

}
