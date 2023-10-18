import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { createConnection, ConnectionCreatedEvent } from 'typeorm';

import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const connection = await createConnection();

  connection.isInitialized &&
    console.log('Database connection established successfully');

  await app.listen(3000);
}
bootstrap();
