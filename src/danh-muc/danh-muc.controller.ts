import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { DanhMucService } from './danh-muc.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';
import { UpdateDanhMucDto } from './dto/create-danh-muc.dto';

@UseGuards(AuthGuard)
@ApiTags('danhMuc')
@Controller('danh-muc')
export class DanhMucController {
  constructor(private readonly danhMucService: DanhMucService) {}

  @Get('/get-danh-muc')
  read(@Headers('token') token: string) {
    return this.danhMucService.read(token);
  }
  @Post('/tao-danh-muc')
  create(@Headers('token') token: string) {
    return this.danhMucService.create(token);
  }
  @Post('/cap-nhat-danh-muc')
  update(@Headers('token') token: string, @Body() body: UpdateDanhMucDto) {
    return this.danhMucService.update(token, body);
  }
  @Delete('xoa-danh-muc/:dmId')
  delete(@Headers('token') token: string, @Param('dmId') dmId: number) {
    return this.danhMucService.delete(token, +dmId);
  }
  @Get('tim-danh-muc/:keyword')
  search(@Headers('token') token: string, @Param('keyword') keyword: string) {
    return this.danhMucService.search(token, keyword);
  }



}
