import { initSundry } from '@app/helpers/sundry.init'
initSundry()

import { NestFactory, HTTP_SERVER_REF } from '@nestjs/core';
import { AppModule } from '@app/modules/app.module';
import { ValidationPipe } from '@app/helpers/validation.pipe';
import { AllExceptionsFilter } from '@app/helpers/exception.filter';
import { BackInterceptor } from '@app/helpers/back.interceptor';
import { CustomLogger } from '@app/helpers/custom.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HTTP_SERVER_REF)))
  app.useGlobalInterceptors(new BackInterceptor())
  app.useLogger(CustomLogger)
  app.enableCors()
  await app.listen(3001);
}
bootstrap().then(() => {
  console.info(`weiapi started, port at: 3001`)
})