import { ObjectSchema } from 'joi'
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { joiValidationErrorHandler } from 'src/helpers/HelperJoi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) { }

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value, { abortEarly: false });

    if (error) throw new BadRequestException(joiValidationErrorHandler(error))
    return value
  }
}