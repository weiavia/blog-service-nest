import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ParamException } from '@app/exceptions/param.exception';

/* 
  重写validationpipe, 使用class-validate校验pararm
  校验失败抛出 paramException
*/
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata) {
      const { metatype } = metadata;
      if (!metatype || !this.toValidate(metatype)) {
          return value;
      }
      const object = plainToClass(metatype, value);
      // console.log(object)
      const errors = await validate(object);
      if (errors.length > 0) {
          let message = this.concatMessage(errors)
          throw new ParamException({message})
      }
      return value;
    }

    private toValidate(metatype): boolean {
      const types = [String, Boolean, Number, Array, Object];
      return !types.find((type) => metatype === type);
    }

    private concatMessage(errors) {
      let res = []
      errors.forEach(error => {
        res.push({
          field: error.property,
          faild: error.constraints
        })
      });
      return res
    }
}