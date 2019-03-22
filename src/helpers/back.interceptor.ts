import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}
/* 
  使用拦截器对控制器返回的数据进行了一层封装
*/
@Injectable()
export class BackInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, call$: Observable<T>,): Observable<Response<T>> {
    
    return call$.pipe(map((data) => { 
      return ({ data: typeof data === 'undefined' ? null : data, errno: 0})}     
    ));
  }
}