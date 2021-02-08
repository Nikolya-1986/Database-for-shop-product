import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './controllers/shop.controller';
import { Shop } from './entities/shop.entity';
import { ShopService } from './services/shop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],//forFeature() Когда TypeOrmModule используется повторно не в главном модуле и передать список сущностей с которыми будет работать данный модуль
  controllers: [ShopController],//В модуле регистрируется ShopController
  providers: [ShopService],//регистрация сервиса
})
export class ShopModule {}
