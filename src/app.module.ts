import { Module } from '@nestjs/common';
import { ItemModule } from './items/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
@Module({
  imports: [ItemModule, MongooseModule.forRoot(config.mongoURI)],
})
export class AppModule {}
