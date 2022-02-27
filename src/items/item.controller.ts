import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createItemDto } from './dto/createItem.dto';
import { Item } from './interface/item.interface';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemsService: ItemService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  Create(@Body() createItemDto: createItemDto): Promise<Item> {
    return this.itemsService.Create(createItemDto);
  }

  @Delete(':id')
  Delete(@Param('id') id): Promise<Item> {
    return this.itemsService.Delete(id);
  }

  @Put(':id')
  Update(@Body() createItemDto: createItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.Update(id, createItemDto);
  }
}
