import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { User } from '@app/modules/user/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>, @InjectConnection() private readonly connect) {}
  
  getAlluser(): string {
    return 'all user'
  }

  close() {
    this.connect.close()
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find()
  }
}
