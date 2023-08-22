import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'teachers' })
export class TeacherEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  constructor(id?: number, name?: string, email?: string, password?: string) {
    if (id) this.id = id
    if (name) this.name = name
    if (email) this.email = email
    if (password) this.password = password
  }
}