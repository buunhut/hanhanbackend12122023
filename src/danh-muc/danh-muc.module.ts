import { Module } from '@nestjs/common';
import { DanhMucService } from './danh-muc.service';
import { DanhMucController } from './danh-muc.controller';
import { ExtraService } from 'src/service';

@Module({
  controllers: [DanhMucController],
  providers: [DanhMucService, ExtraService],
})
export class DanhMucModule {}
