import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
import { AuthException } from '@app/exceptions/auth.exception';

const SERCRET = process.env.AUTH_SECRET

@Injectable()
export class AuthService {
  /* 
    生成json web token 存储userId到payload 过期时间为2小时
    return json web token
  */
  generateJwt(uid: number): string {
    let payload = { uid }
    let token = jwt.sign(payload, SERCRET, { expiresIn: '2h'})
    return token
  }

  /* 
  检查json web token合法性，不合法则抛出 authException
  return payload 
  */
  checkJwt(token: string): Promise<[]> {
    return new Promise((resolve) => {
      jwt.verify(token, SERCRET, (error, decoded) => {
        if (error) {
          throw new AuthException()
        }
        resolve(decoded)
      })
    })
  }

}