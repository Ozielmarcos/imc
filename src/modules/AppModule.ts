import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherModule } from './TeacherModule';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'imc',
    logging: true,
    autoLoadEntities: true
  }), TeacherModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
