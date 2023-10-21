import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
import { User } from './entity/user.entity';
import serverResponseStatus from 'src/configs/serverResponseStatus';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      console.log('HITTING CREATE USER FUNC');
      console.log({ createUserDto });
      const foundInfo = await this.userRepository.findOne({
        where: {
          uid: createUserDto.uid,
        },
      });

      if (foundInfo) {
        return foundInfo;
      }
      const user: User = new User();
      user.email = createUserDto.email;
      user.uid = createUserDto.uid;
      user.role = createUserDto.role;
      return await this.userRepository.save(user);
    } catch (error) {
      throw new HttpException(
        { message: 'Failed to save User', error },
        serverResponseStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
