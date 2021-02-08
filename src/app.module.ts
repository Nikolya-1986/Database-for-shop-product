import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './modules/shop/shop.modules';

@Module({
  imports: [TypeOrmModule.forRoot(), ShopModule],//TypeOrmModule для регистрации ormconfig.json
  controllers: [AppController],//Для предоставления точки входа в плиложение
  providers: [AppService],//С помощью AppService можно внедрять его в другие модули, компоненты
})
export class AppModule {}//Служит для регистрации других модулей