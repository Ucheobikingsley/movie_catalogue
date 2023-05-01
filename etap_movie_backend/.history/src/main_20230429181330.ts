import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  await app.listen(parseInt(process.env.PORT, 10) || 4000, () => {
    console.log('[WEB]', configService.get('PORT'));
  });
}
bootstrap();
