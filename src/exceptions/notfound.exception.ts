import { CustomException } from "@app/exceptions/base.exception";
import { returnParam } from "@app/interface/return.interface";

export class NotFoundException extends CustomException {
  constructor(customDto?: returnParam) {
    super(customDto, {
      message: '资源查询不到',
      errno: 3001,
      status: 200
    })
  }
}