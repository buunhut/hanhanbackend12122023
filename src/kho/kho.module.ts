import { Module } from '@nestjs/common';
import { KhoService } from './kho.service';
import { KhoController } from './kho.controller';

@Module({
  controllers: [KhoController],
  providers: [KhoService],
})
export class KhoModule {}
