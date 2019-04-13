import { Module } from '@nestjs/common';
import { AuthController } from '@app/controllers/auth.controller';
import { AuthService } from '@app/services/auth.service';
import { JwtStrategy } from '@app/helpers/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
