import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { createConnection } from 'typeorm';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { PORT } from './common/env';
import { E_TOO_MANY_REQUESTS } from './common/exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // -- Helmet
  app.use(helmet());

  // -- Cors setup
  app.enableCors({
    origin: false,
  });

  // rate limit
  app.use(
    rateLimit({
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 100,
      standardHeaders: true,
      legacyHeaders: false,
      skipSuccessfulRequests: false,
      message: { message: E_TOO_MANY_REQUESTS, statusCode: 403 },
    }),
  );

  // -- Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const connection = await createConnection();

  await app.listen(PORT, () => {
    Logger.log(`Server Actively Listening @ port ${PORT}`);
    connection.isInitialized &&
      Logger.log('Database connection established successfully');
  });
}
bootstrap();
