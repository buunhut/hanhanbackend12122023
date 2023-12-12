import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards, Put } from '@nestjs/common';
import { SanPhamService } from './san-pham.service';
import { CreateSanPhamDto, UpdateDanhMucSanPhamDto, UpdateDvtDto, UpdateGiaBanDto, UpdateGiaGiamDto, UpdateGiaNhapDto, UpdateMaSpDto, UpdateMaxOrderDto, UpdatePhiVcDto, UpdateQuyDoiDto, UpdateTenSpDto, UpdateThuongHieuSanPhamDto } from './dto/create-san-pham.dto';
import { UpdateSanPhamDto } from './dto/update-san-pham.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

@UseGuards(AuthGuard)
@ApiTags('sanPham')
@Controller('san-pham')
export class SanPhamController {
  constructor(private readonly sanPhamService: SanPhamService) {}

  @Post('tao-san-pham')
  create(@Headers('token') token: string, @Body() body: CreateSanPhamDto) {
    return this.sanPhamService.create(token, body);
  }
  @Get('tao-don-vi-tinh/:kId')
  createDvt(@Headers('token') token: string, @Param('kId') kId: number) {
    return this.sanPhamService.createDvt(token, +kId);
  }
  @Get('get-san-pham') 
  readSanPham(@Headers('token') token: string) {
    return this.sanPhamService.readSanPham(token);
  }
  // @Put('cap-nhat-danh-muc')
  // updateDanhMuc(@Headers('token') token: string, @Body() body: UpdateDanhMucSanPhamDto) {
  //   return this.sanPhamService.updateDanhMuc(token, body);
  // }
  // @Put('cap-nhat-thuong-hieu')
  // updateThuongHieu(@Headers('token') token: string, @Body() body: UpdateThuongHieuSanPhamDto) {
  //   return this.sanPhamService.updateThuongHieu(token, body);
  // }
  @Put('cap-nhat-ma-san-pham')
  updateMaSp(@Headers('token') token: string, @Body() body: UpdateMaSpDto) {
    return this.sanPhamService.updateMaSp(token, body);
  }
  @Put('cap-nhat-ten-san-pham')
  updateTenSp(@Headers('token') token: string, @Body() body: UpdateTenSpDto) {
    return this.sanPhamService.updateTenSp(token, body);
  }
  @Put('cap-nhat-dvt-san-pham')
  updateDvt(@Headers('token') token: string, @Body() body: UpdateDvtDto) {
    return this.sanPhamService.updateDvt(token, body);
  }
  @Put('cap-nhat-gia-nhap')
  updateGiaNhap(@Headers('token') token: string, @Body() body: UpdateGiaNhapDto) {
    return this.sanPhamService.updateGiaNhap(token, body);
  }
  @Put('cap-nhat-gia-ban')
  updateGiaBan(@Headers('token') token: string, @Body() body: UpdateGiaBanDto) {
    return this.sanPhamService.updateGiaBan(token, body);
  }
  @Put('cap-nhat-gia-giam')
  updateGiaGiam(@Headers('token') token: string, @Body() body: UpdateGiaGiamDto) {
    return this.sanPhamService.updateGiaGiam(token, body);
  }
  @Put('cap-nhat-phi-vc')
  updatePhiVc(@Headers('token') token: string, @Body() body: UpdatePhiVcDto) {
    return this.sanPhamService.updatePhiVc(token, body);
  }
  @Put('cap-nhat-quy-doi')
  updateQuyDoi(@Headers('token') token: string, @Body() body: UpdateQuyDoiDto) {
    return this.sanPhamService.updateQuyDoi(token, body);
  }
  @Put('cap-nhat-maxorder')
  updateMaxOrder(@Headers('token') token: string, @Body() body: UpdateMaxOrderDto) {
    return this.sanPhamService.updateMaxOrder(token, body);
  }
  @Put('cap-nhat-sho/:spId')
  updateSho(@Headers('token') token: string, @Param('spId') spId: number) {
    return this.sanPhamService.updateSho(token, +spId);
  }
  @Delete('xoa-san-pham/:spId')
  delete(@Headers('token') token: string, @Param('spId') spId: number) {
    return this.sanPhamService.delete(token, +spId);
  }

  



}
