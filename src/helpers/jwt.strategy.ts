import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '@app/services/auth.service';

const SECRET = process.env.AUTH_SECRET

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
  // 配置passport-jwt的 options
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: SECRET,
    });
  }

  // passport-jwt的 verify
  async validate(payload, done: Function) {
    done(null, true);
  }
}