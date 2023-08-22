import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TeacherDto } from 'src/classes/TeacherDto';
import { JoiValidationPipe } from 'src/joyPipes/JoiValidationPipe';
import { TeacherSchema } from 'src/schemas/TeacherSchema';
import { TeacherService } from 'src/services/TeacherService';


@Controller()
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }

  @Post()
  async create(@Body(new JoiValidationPipe(TeacherSchema.userCreate)) teacherDto: TeacherDto) {
    const user = await this.teacherService.create(teacherDto)
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
