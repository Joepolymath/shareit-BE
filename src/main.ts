import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  const connection = await createConnection();

  connection.isInitialized &&
    console.log('Database connection established successfully');

  await app.listen(PORT, () => {
    console.log(`Server Actively Listening @ port ${PORT}`);
  });
}
bootstrap();
