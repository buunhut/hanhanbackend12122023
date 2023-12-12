import { Module } from '@nestjs/common';
import { ChiTietService } from './chi-tiet.service';
import { ChiTietController } from './chi-tiet.controller';

@Module({
  controllers: [ChiTietController],
  providers: [ChiTietService],
})
export class ChiTietModule {}
