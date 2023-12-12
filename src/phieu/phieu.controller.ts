import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Put } from '@nestjs/common';
import { PhieuService } from './phieu.service';
import { CreatePhieuDto, LuuPhieuDto, SortPhieuDto, SuaChiTietDto, TraNoMotPhieuDto } from './dto/create-phieu.dto';
import { UpdatePhieuDto } from './dto/update-phieu.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('phieu')
@Controller('phieu')
export class PhieuController {
  constructor(private readonly phieuService: PhieuService) {}

  @Get('/get-san-pham')
  findAllSanPham(@Headers('token') token: string) {
    return this.phieuService.findAllSanPham(token);
  }
  @Get('/tim-san-pham/:keyword')
  searchSanPham(@Headers('token') token: string, @Param('keyword') keyword: string) {
    return this.phieuService.search(token, keyword);
  }
  @Post('/tao-phieu')
  taoPhieu(@Headers('token') token: string , @Body() body: CreatePhieuDto) {
    return this.phieuService.taoPhieu(token, body);
  }

  @Get('/get-phieu-nhap-moi-tao')
  getPhieuNhapMoiTao(@Headers('token') token: string) {
    return this.phieuService.getPhieuNhapMoiTao(token);
  }

  @Put('sua-chi-tiet')
  suaChiTiet(@Headers('token') token: string, @Body() body: SuaChiTietDto) {
    return this.phieuService.suaChiTiet(token, body);
  }

  @Delete('xoa-phieu-moi-tao/:pId')
  xoaPhieuMoiTao(@Headers('token') token: string, @Param('pId') pId: number) {
    return this.phieuService.xoaPhieuMoiTao(token, +pId);
  }
  @Post('/luu-phieu-moi-tao')
  luuPhieuMoiTao(@Headers('token') token: string , @Body() body: LuuPhieuDto) {
    return this.phieuService.luuPhieuMoiTao(token, body);
  }
  @Post('/tra-no-mot-phieu')
  traNoMotPhieu(@Headers('token') token: string , @Body() body: TraNoMotPhieuDto) {
    return this.phieuService.traNoMotPhieu(token, body);
  }
  @Post('sort-phieu')
  sortPhieu(@Headers('token') token:string, @Body() body: SortPhieuDto) {
    return this.phieuService.sortPhieu(token, body);

  }

}
