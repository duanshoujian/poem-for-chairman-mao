import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Poem for Chairman Mao')
    .setDescription('Poem for Chairman Mao API description')
    .setVersion('1.0')
    .addTag('poem')
    .build();



}
bootstrap();