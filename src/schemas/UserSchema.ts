import * as Joi from 'joi'

export class UserSchema {
  static userObject = {
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{4,30}$')),
  }

  static UserLogin = Joi.object({
    ...this.userObject
  })
}