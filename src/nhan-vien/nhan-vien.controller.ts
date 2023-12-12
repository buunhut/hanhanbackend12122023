import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards, Put } from '@nestjs/common';
import { NhanVienService } from './nhan-vien.service';
import { CreateNhanVienDto, UpdateNhanVienDto } from './dto/create-nhan-vien.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

@UseGuards(AuthGuard)
@ApiTags('nhanVien')
@Controller('nhan-vien')
export class NhanVienController {
  constructor(private readonly nhanVienService: NhanVienService) {}

  @Post('tao-nhan-vien')
  create(@Headers('token') token: string) {
    return this.nhanVienService.create(token);
  }

  @Get('get-danh-sach-nhan-vien')
  findAll(@Headers('token') token: string) {
    return this.nhanVienService.findAll(token);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nhanVienService.findOne(+id);
  }

  @Put('cap-nhat-thong-tin-nhan-vien')
  update(@Headers('token') token: string, @Body() body: UpdateNhanVienDto) {
    return this.nhanVienService.update(token, body);
  }

  @Delete('xoa-nhan-vien/:nvId')
  delete(@Headers('token') token: string, @Param('nvId') nvId: string) {
    return this.nhanVienService.delete(token, +nvId);
  }
}
