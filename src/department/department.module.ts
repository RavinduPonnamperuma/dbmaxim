import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from './Schemas/dipartment.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Department',schema:DepartmentSchema}])],
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}
