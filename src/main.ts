import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Death Diary API')
    .setDescription('The Death Diary API swagger')
    .setVersion('0.1')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}

bootstrap();
