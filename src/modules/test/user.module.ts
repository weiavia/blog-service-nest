import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookModule } from "@app/modules/book/book.module";
import { User } from "@app/modules/user/user.entity";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [BookModule, TypeOrmModule.forFeature([User])]
})
export class UserModule {}