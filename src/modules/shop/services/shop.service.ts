import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Shop } from '../entities/shop.entity';

@Injectable()
export class ShopService extends TypeOrmCrudService<Shop> {
  constructor(@InjectRepository(Shop) shopRepository){
    super(shopRepository);
  }
}