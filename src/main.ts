import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/environment.config';

const { PORT } = config;

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    '/public/images',
    express.static(join(__dirname, '../public'), {
      extensions: ['png', 'jpeg'],
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Auth Service')
    .setDescription('The Auth Service API documentation')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(PORT || 3000);
}
bootstrap();
