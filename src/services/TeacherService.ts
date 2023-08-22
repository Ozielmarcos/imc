import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherDto } from 'src/classes/TeacherDto';
import { TeacherEntity } from 'src/entities/TeacherEntity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(TeacherEntity)
  private readonly teacherRepository: Repository<TeacherEntity>,) { }

  async create(teacherDto: TeacherDto) {
    const userEntity = new TeacherEntity(teacherDto.id, teacherDto.name, teacherDto.email, teacherDto.password)
    await this.teacherRepository.save(userEntity)
  }
}
