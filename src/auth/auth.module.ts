import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersModule } from 'src/users/users.module';
import { UserService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Info } from 'src/info/entity/info.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([User, Info]),
    CorsModule.forRoot({
      origin: '*',
      credentials: true,
    }),
  ],
  controllers: [],
  providers: [AuthService, AuthGuard, UserService],
})
export class AuthModule {}
