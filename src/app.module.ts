import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { InfoModule } from './info/info.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { Info } from './info/entity/info.entity';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    InfoModule,
    AuthModule,
    TypeOrmModule.forFeature([User, Info]),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, AuthGuard, UserService],
})
export class AppModule {}
