import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitorSchema } from './Schemas/visitor.schema';
import { EmployeeSchema } from 'src/employee/schemas/employee.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Visitor',schema:VisitorSchema},{name: 'Employee', schema: EmployeeSchema}])],
  controllers: [VisitorController],
  providers: [VisitorService]
})
export class VisitorModule {}
