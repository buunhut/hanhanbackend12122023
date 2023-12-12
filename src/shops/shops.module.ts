import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { ExtraService } from 'src/service';

@Module({
  controllers: [ShopsController],
  providers: [ShopsService, ExtraService],
})
export class ShopsModule {}
