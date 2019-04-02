import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Praise } from '@app/entity/praise.entity';


@Injectable()
export class AppService {
  constructor(@InjectRepository(Praise) private PraiseRepository) {}

  // 点赞
  addPraise() {

  }

  // 取消点赞
  cancelPraise() {

  }
}