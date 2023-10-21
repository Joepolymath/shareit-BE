import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
// import * as dotenv from 'dotenv';

import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from 'src/common/env';

// dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
