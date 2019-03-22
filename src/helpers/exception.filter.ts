import { Catch, ArgumentsHost, HttpServer, Inject } from '@nestjs/common';
import { BaseExceptionFilter, HTTP_SERVER_REF } from '@nestjs/core';
import { CustomException } from '@app/exceptions/base.exception';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(@Inject(HTTP_SERVER_REF) applicationRef: HttpServer) {
    super(applicationRef);
  }

  /* 
    重写nest全局异常捕获类，
    如果抛出的是CustomException给前端返回友好的提示
    如果是System抛出的错误记录日志，返回500
  */
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    if(exception instanceof CustomException) {
      response.status(exception.status)
              .json({
                message: exception.message,
                errno: exception.errno
              })
    } else {
      super.catch(exception, host)
      // console.log('system exception=>', exception)
    }
    // super.catch(exception, host);
  }
}