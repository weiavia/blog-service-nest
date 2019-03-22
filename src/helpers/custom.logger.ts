import { Logger } from "@nestjs/common";

export class CustomLogger extends Logger {
  error(message: string, trace: string) {
    console.log('custom')
    super.error(message, trace)
  }

  warn(message: string) {}

  log(message: string, trace: string) {
    console.log('custom')
    super.log(message, trace)
  }
}