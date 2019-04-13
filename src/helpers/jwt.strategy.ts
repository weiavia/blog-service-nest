import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '@app/services/auth.service';

const SERCRET = process.env.AUTH_SERCRET

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
  // 配置passport-jwt的 options
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: SERCRET
    });
  }

  // passport-jwt的 verify
  async validate(payload, done: Function) {
    console.log(payload)
    done(null, true);
  }
}