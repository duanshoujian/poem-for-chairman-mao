import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { loggerMiddleware } from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 获取配置服务
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') || 3000;
  const appName = configService.get<string>('app.name') || 'NestJS App';
  const appVersion = configService.get<string>('app.version') || '1.0.0';

  // 启用 CORS（如果需要）
  app.enableCors();
  app.use(loggerMiddleware);

  // Swagger 配置
  const swaggerConfig = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(`API Documentation for ${appName}`)
    .setVersion(appVersion)
    .addTag('users', '用户相关接口')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger docs available at: http://localhost:${port}/api-docs`);
}

bootstrap()