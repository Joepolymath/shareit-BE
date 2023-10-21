import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Info } from './entity/info.entity';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/users/entity/user.entity';
import { UserService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Info, User])],
  controllers: [InfoController],
  providers: [InfoService, AuthService, UserService],
})
export class InfoModule {}
