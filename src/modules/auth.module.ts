import { Module } from '@nestjs/common';
import { AuthController } from '@app/controllers/auth.controller';
import { AuthService } from '@app/services/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
