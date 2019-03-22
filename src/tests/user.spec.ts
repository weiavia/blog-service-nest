import { Test } from '@nestjs/testing';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@app/modules/user/user.entity";
import { UserController } from "@app/modules/user/user.controller";
import { UserService } from "@app/modules/user/user.service";

describe('用户模块', () => {
  let userController: UserController
  let userService: UserService

  beforeEach(async () => {

    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([User])]
    }).compile()

    userController = module.get<UserController>(UserController)
    userService = module.get<UserService>(UserService)

    // console.log('usercontroller', userController)
  })

  describe('findAll', () => {
    it('return user', async () => {

      // jest.spyOn(userService, 'getAlluser').mockImplementation(() => result);
      let v = await userService.findAll()
      expect(v).toBe(Array);
      userService.close()
    })
  })
})