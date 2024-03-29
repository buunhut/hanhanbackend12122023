import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Put } from '@nestjs/common';
import { PhieuService } from './phieu.service';
import { CreatePhieuDto, LuuPhieuDto, SortPhieuDto, SuaChiTietDto, SuaDoiTacDto, TraNoMotPhieuDto } from './dto/create-phieu.dto';
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

  @Get('/get-phieu-xuat-moi-tao')
  getPhieuXuatMoiTao(@Headers('token') token: string) {
    return this.phieuService.getPhieuXuatMoiTao(token);
  }

  @Get('/get-phieu-nhap/:pId')
  getPhieuNhap(@Headers('token') token: string, @Param('pId') pId: number) {
    return this.phieuService.getPhieuNhap(token, +pId);
  }

  @Put('sua-chi-tiet')
  suaChiTiet(@Headers('token') token: string, @Body() body: SuaChiTietDto) {
    return this.phieuService.suaChiTiet(token, body);
  }
  @Put('sua-doi-tac')
  suaDoiTac(@Headers('token') token: string, @Body() body: SuaDoiTacDto) {
    return this.phieuService.suaDoiTac(token, body);
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
  @Post('sort-phieu-xuat')
  sortPhieuXuat(@Headers('token') token:string, @Body() body: SortPhieuDto) {
    return this.phieuService.sortPhieuXuat(token, body);

  }
  @Post('sort-phieu-nhap')
  sortPhieuNhap(@Headers('token') token:string, @Body() body: SortPhieuDto) {
    return this.phieuService.sortPhieuNhap(token, body);

  }
  



}
