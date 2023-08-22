import * as Joi from 'joi'

export class TeacherSchema {
  static userObject = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{4,30}$')),
  }

  static userCreate = Joi.object({
    ...this.userObject
  })

  static userUpdate = Joi.object({
    ...this.userObject
  })
}