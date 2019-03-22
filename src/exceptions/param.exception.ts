import { CustomException } from "@app/exceptions/base.exception";

export class ParamException extends CustomException {
  constructor(customDto?) {
    super(customDto, {
      message: '参数错误',
      errno: 1001,
      status: 400
    })
  }
}