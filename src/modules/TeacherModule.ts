import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from 'src/controllers/TeacherController';
import { TeacherEntity } from 'src/entities/TeacherEntity';
import { TeacherService } from 'src/services/TeacherService';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherEntity])],
  controllers: [TeacherController],
  providers: [TeacherService],
})

export class TeacherModule { }