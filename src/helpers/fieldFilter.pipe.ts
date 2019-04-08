import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';

/* 
  过滤keys白名单
*/
@Injectable()
export class FieldFilterPipe implements PipeTransform<any> {
    constructor(private keys) {}

    async transform(value, metadata: ArgumentMetadata) {
      if(metadata.type === 'param') {
        return value
      }
      
      for(let key in value) {
        if(!this.keys.includes(key)) {
          delete value[key]
        }
      }

      return value;
    }
}