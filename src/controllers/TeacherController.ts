import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TeacherDto } from 'src/classes/TeacherDto';
import { TeacherService } from 'src/services/TeacherService';


@Controller()
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }

  @Post()
  create(@Body() teacherDto: TeacherDto) {
    const user = this.teacherService.create(teacherDto)
    return user

  }

  @Get()
  findAll() { }

  @Get(':id')
  findOne() { }

  @Put()
  update() { }

  @Delete()
  remove() { }

}
