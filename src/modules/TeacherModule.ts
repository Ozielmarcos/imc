import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from 'src/controllers/TeacherController';
import { TeacherEntity } from 'src/entities/TeacherEntity';
import { AuthService } from 'src/services/AuthService';
import { TeacherService } from 'src/services/TeacherService';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([TeacherEntity]), JwtModule.register({ global: true, secret: 'JWT123', signOptions: { expiresIn: '7d' } })],
  controllers: [TeacherController],
  providers: [TeacherService, AuthService],
})

export class TeacherModule { }