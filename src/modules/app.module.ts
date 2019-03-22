import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from '@app/modules/app.controller';
import { AppService } from '@app/modules/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@app/modules/auth/auth.module';
import { AuthMiddleware } from '@app/helpers/auth.middleware';
import { AuthService } from '@app/modules/auth/auth.service';
import { BlockModule } from '@app/modules/block/block.module';

const imports = [
  AuthModule, 
  BlockModule,
  TypeOrmModule.forRoot()
]

const controllers = [
  AppController,
]

const providers = [
  AppService,
  AuthService
]

@Module({
  imports,
  controllers,
  providers
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
            .forRoutes('/')
  }
}