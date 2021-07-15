import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
