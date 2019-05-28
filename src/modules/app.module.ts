import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from '@app/controllers/app.controller';
import { AppService } from '@app/services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@app/modules/auth.module';
import { AuthMiddleware } from '@app/helpers/auth.middleware';
import { AuthService } from '@app/services/auth.service';
import { BlockModule } from '@app/modules/block.module';
import { CommentModule } from '@app/modules/comment.module';
import { CommentService } from '@app/services/comment.service';
import { TimelineModule } from '@app/modules/timeline.module';

const imports = [
  AuthModule, 
  BlockModule,
  CommentModule,
  TimelineModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      "src/**/*.entity.ts"
    ]
  })
]

const controllers = [
  AppController,
]

const providers = [
  AppService,
  AuthService,
  CommentService
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