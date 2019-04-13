import { CustomException } from "@app/exceptions/base.exception";

export class AuthException extends CustomException {
  constructor(customDto?) {
    super(customDto, {
      message: '没有权限',
      errno: 4001,
      status: 401
    })
  }
}