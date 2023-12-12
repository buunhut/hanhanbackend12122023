import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ThuongHieuService } from './thuong-hieu.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateThuongHieuDto, UpdateThuongHieuDto } from './dto/create-thuong-hieu.dto';

@ApiTags('thuongHieu')
@Controller('thuong-hieu')
export class ThuongHieuController {
  constructor(private readonly thuongHieuService: ThuongHieuService) {}

  @Get('/get-thuong-hieu')
  read(@Headers('token') token: string) {
    return this.thuongHieuService.read(token);
  }
  @Post('/tao-thuong-hieu')
  create(@Headers('token') token: string, @Body() body: CreateThuongHieuDto  ) {
    return this.thuongHieuService.create(token, body);
  }
  @Post('/cap-nhat-thuong-hieu')
  update(@Headers('token') token: string, @Body() body: UpdateThuongHieuDto) {
    return this.thuongHieuService.update(token, body);
  }
  @Delete('xoa-thuong-hieu/:thId')
  delete(@Headers('token') token: string, @Param('thId') thId: number) {
    return this.thuongHieuService.delete(token, +thId);
  }
  @Get('tim-thuong-hieu/:keyword')
  search(@Headers('token') token: string, @Param('keyword') keyword: string) {
    return this.thuongHieuService.search(token, keyword);
  }
}
