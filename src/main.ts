import { initSundry } from '@app/helpers/sundry.init'
initSundry()

import { NestFactory, HTTP_SERVER_REF } from '@nestjs/core';
import { AppModule } from '@app/modules/app.module';
import { ValidationPipe } from '@app/helpers/validation.pipe';
import { AllExceptionsFilter } from '@app/helpers/exception.filter';
import { BackInterceptor } from '@app/helpers/back.interceptor';
import { CustomLogger } from '@app/helpers/custom.logger';
import { STATIC_DIR } from '@app/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HTTP_SERVER_REF)))
  app.useGlobalInterceptors(new BackInterceptor())
  app.useLogger(CustomLogger)
  console.log(STATIC_DIR)
  // app.use('/static', STATIC_DIR)
  app.useStaticAssets(STATIC_DIR, {prefix: '/static'})
  app.enableCors()
  await app.listen(process.env.PORT);
}
bootstrap().then(() => {
  console.info(`weiapi started, port at: ${process.env.PORT}`)
})