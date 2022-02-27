import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { itemSchema } from './schema/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: itemSchema }])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
