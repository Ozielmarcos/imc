import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherDto } from 'src/classes/TeacherDto';
import { TeacherEntity } from 'src/entities/TeacherEntity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(TeacherEntity)
  private readonly teacherRepository: Repository<TeacherEntity>,) { }

  async create(teacherDto: TeacherDto) {
    const userEntity = new TeacherEntity(teacherDto.id, teacherDto.name, teacherDto.email, this.hashPassword(teacherDto.password))
    await this.teacherRepository.save(userEntity)
  }

  async findAll() {
    const teachers = await this.teacherRepository.find()
    return teachers.map(teacher => new TeacherEntity(teacher.id, teacher.name, teacher.email))
  }

  async findOne(id: number) {
    const teacher = await this.teacherRepository.findOne({ where: { id: id } })
    if (!teacher) throw new NotFoundException('Professor não encontrado')
    return new TeacherEntity(id, teacher.name, teacher.email)
  }

  async update(id: number, teacher: Partial<TeacherDto>) {
    const teacherEntity = await this.teacherRepository.findOne({ where: { id: id } })
    if (!teacherEntity) throw new NotFoundException('Professor não encontrado')
    await teacherEntity.set(teacher.name, teacher.email, teacher.password ? this.hashPassword(teacher.password) : undefined)
    const updatedTeacher = await this.teacherRepository.save(teacherEntity)
    return new TeacherEntity(id, updatedTeacher.name, updatedTeacher.email)

  }

  private hashPassword(password: string) {
    const salt = 10
    return bcrypt.hashSync(password, salt)
  }

  comparePassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash)
  }
}
