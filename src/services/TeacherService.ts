import { Injectable } from '@nestjs/common';
import { TeacherDto } from 'src/classes/TeacherDto';

@Injectable()
export class TeacherService {
  create(teacherDto: TeacherDto) {
    const user = new TeacherDto(teacherDto.name, teacherDto.email, teacherDto.password)
    return user
  }
}
