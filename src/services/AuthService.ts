import { Injectable, UnauthorizedException } from "@nestjs/common";
import { TeacherService } from "./TeacherService";
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from "@nestjs/typeorm";
import { TeacherEntity } from "src/entities/TeacherEntity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(@InjectRepository(TeacherEntity)
  private teacherRepository: Repository<TeacherEntity>,
    private teacherService: TeacherService,
    private jwtService: JwtService) { }

  async signIn(email: string, password: string) {
    const teacher = await this.teacherRepository.findOne({ where: { email: email } })
    if (!teacher) throw new Error('Usuário não encontrado')
    const isPasswordValid = this.teacherService.comparePassword(password, teacher.password)
    if (!isPasswordValid) throw new UnauthorizedException()

    const payload = { email: teacher.email }
    return { token: await this.jwtService.signAsync(payload) }
  }
}