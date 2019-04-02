import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { AuthService } from '@app/services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private authService: AuthService) {}

  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      // console.log(this.authService.checkJwt())
      next();
    };
  }
}