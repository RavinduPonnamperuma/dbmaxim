import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { Visitor } from './Schemas/visitor.schema';

@Controller('Visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Post()
  async create(@Body() createVisitorDto: CreateVisitorDto):Promise<Visitor> {
 
    return this.visitorService.create(createVisitorDto)

  }

  @Get(':nicno')
  async getVisiorsbyNic(@Param('nicno')nicno:string):Promise<Visitor> {
    return this.visitorService.findByNIC(nicno);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.visitorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVisitorDto: UpdateVisitorDto) {
  //   return this.visitorService.update(+id, updateVisitorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.visitorService.remove(+id);
  // }
}
