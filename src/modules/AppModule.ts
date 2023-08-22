import { Module } from '@nestjs/common';
import { TeacherController } from '../controllers/TeacherController';
import { TeacherService } from 'src/services/TeacherService';



@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class AppModule { }
