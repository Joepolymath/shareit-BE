import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { createConnection } from 'typeorm';

import { AppModule } from './app.module';
import { PORT } from './common/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const connection = await createConnection();

  await app.listen(PORT, () => {
    Logger.log(`Server Actively Listening @ port ${PORT}`);
    connection.isInitialized &&
      Logger.log('Database connection established successfully');
  });
}
bootstrap();
