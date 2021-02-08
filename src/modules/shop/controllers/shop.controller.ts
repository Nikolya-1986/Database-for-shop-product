import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Shop } from '../entities/shop.entity';
import { ShopService } from '../services/shop.service';

@Crud({
  model: {
    type: Shop
  }
})

@ApiTags('goods')
@Controller('rest/shop')//Необходимо для rest указать ссылку куда обращаемся
export class ShopController implements CrudController<Shop> {
  constructor(public service: ShopService) {}
}