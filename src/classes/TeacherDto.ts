export class TeacherDto {
  id: number
  name: string
  email: string
  password: string
  constructor(name: string,
    email: string,
    password: string, id?: number) {
    if (id) this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}