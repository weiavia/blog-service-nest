import { returnParam } from "@app/interface/return.interface";

export class CustomException {
  errno:number = 0
  status:number = 200
  message:string = 'custom exception'
  customDto:returnParam
  childDot:returnParam

  /* 
    自定义异常返回前端的数据模板
    优先级：customDto > childDot > CustomException默认参数
  */
  constructor(customDto?: returnParam, childDot?: returnParam) {
    this.customDto = customDto
    this.childDot = childDot
    this.useDto()
  }

  useDto () {
    let dot = Object.assign({}, this.childDot, this.customDto)
    this.errno = dot.errno || this.errno
    this.status = dot.status || this.status
    this.message = dot.message || this.message
  }
}