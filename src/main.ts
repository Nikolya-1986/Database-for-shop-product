import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {//Файл с которого начинается весь проект
  const app = await NestFactory.create(AppModule, { cors: true });//NestFactory создаёт новое приложение, создаётся приложение используя модуль AppModule, разрещаем cors
  const options = new DocumentBuilder()
    .setTitle('Goods Doc')
    .setDescription('The goods info')
    .setVersion('1.0')
    .addTag('goods')//тег для приходящих Api
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);//созданное приложение вызывается по данному адресу, слушать порт 3000
}
bootstrap();