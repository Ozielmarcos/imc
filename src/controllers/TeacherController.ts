import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from 'src/authorization/AuthGuard';
import { TeacherDto } from 'src/classes/TeacherDto';
import { JoiValidationPipe } from 'src/joyPipes/JoiValidationPipe';
import { TeacherSchema } from 'src/schemas/TeacherSchema';
import { UserSchema } from 'src/schemas/UserSchema';
import { AuthService } from 'src/services/AuthService';
import { TeacherService } from 'src/services/TeacherService';


@Controller()
export class TeacherController {
  constructor(private readonly teacherService: TeacherService,
    private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn(@Body(new JoiValidationPipe(UserSchema.UserLogin)) teacherDto: TeacherDto) {
    const login = await this.authService.signIn(teacherDto.email, teacherDto.password)
    return login
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body(new JoiValidationPipe(TeacherSchema.userCreate)) teacherDto: TeacherDto) {
    const user = await this.teacherService.create(teacherDto)
    return user
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.teacherService.findAll()
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne() { }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number,
    @Body(new JoiValidationPipe(TeacherSchema.userUpdate)) TeacherDto: TeacherDto) {
    const teacherEntity = await this.teacherService.update(id, TeacherDto)
    return teacherEntity
  }

  @UseGuards(AuthGuard)
  @Delete()
  remove() { }

}
