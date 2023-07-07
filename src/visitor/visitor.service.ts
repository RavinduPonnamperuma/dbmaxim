 import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Visitor } from './Schemas/visitor.schema';
import { Employee } from 'src/employee/schemas/employee.schema';

@Injectable()
export class VisitorService {

  constructor(
    @InjectModel("Visitor")
    private vis: mongoose.Model<Visitor>,
    @InjectModel("Employee")
    private emp: mongoose.Model<Employee>

  ) { }
  async create(createVisitorDto: CreateVisitorDto) {
    const ReqwestedEmpCode = createVisitorDto.requestedBy
    const ReqwestedEmp = await (await this.emp.findOne({ empCode: ReqwestedEmpCode})).populate("Employees")

    if (!ReqwestedEmp) {
      throw new NotFoundException('Created employee not found..!!')
    }

    const contactPersonEmpCode = createVisitorDto.contactPerson
    const contectPerson = await this.emp.findOne({ empCode: contactPersonEmpCode}).populate("Employees")

    if (!contectPerson) {
      throw new NotFoundException('contect person not found..!!')
    }

    const createdEmpCode = createVisitorDto.contactPerson
    const createdPerson = await this.emp.findOne({ empCode: createdEmpCode}).populate("Employees")

    if (!createdPerson) {
      throw new NotFoundException('created person not found..!!')
    }

    const Visitors = {
      VisitorType:createVisitorDto.visitorType,
      name:createVisitorDto.name,
      nicno:createVisitorDto.nicno,
      contectno:createVisitorDto.contectno,
      email:createVisitorDto.email,
      status:createVisitorDto.status,
      requestedBy:ReqwestedEmp,
      contactPerson:contectPerson,
      createdBy:createdPerson,
      createdAt:createVisitorDto.createdAt,
      updatedAt:createVisitorDto.updatedAt,
      deletedAt:createVisitorDto.deletedAt

    }
    const res = await this.vis.create(Visitors)
    return res


    
  }

  async findAll(): Promise<Visitor[]> {
    const visitor = await this.vis.find();
    return visitor;
  }
  async findByNIC(nicno:string):Promise<Visitor>{
    const visitor = await this.vis.findOne({nicno:nicno})
    return visitor

  }

  // findOne(id: number) {
  //   return `This action returns a #${id} visitor`;
  // }

  // update(id: number, updateVisitorDto: UpdateVisitorDto) {
  //   return `This action updates a #${id} visitor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} visitor`;
  // }
}
