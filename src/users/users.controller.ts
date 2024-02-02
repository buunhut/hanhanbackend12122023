import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CapNhatTienLiXiDto, CheckSoDtUserDto, CheckThongTinDto, CreateUserDto, DangKyNhanLiXiDto, DangNhapDto, DemLuotTruyCapDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

// @UseGuards(AuthGuard)
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get('/get-tat-ca-san-pham')
  getTatCaSanPham() {
    return this.usersService.getTatCaSanPham();
  }
  @Get('/tim-kiem-san-pham/:keyword')
  timKiemSanPham(@Param('keyword') keyword: string) {
    return this.usersService.timKiemSanPham(keyword);
  }
  @Get('/get-tat-ca-san-pham-by-danh-muc')
  getTatCaSanPhamByDanhMuc() {
    return this.usersService.getTatCaSanPhamByDanhMuc();
  }
  @Get('/get-tat-ca-san-pham-by-thuong-hieu')
  getTatCaSanPhamByThuongHieu() {
    return this.usersService.getTatCaSanPhamByThuongHieu();
  }
  @Post('dang-ky')
  dangKy(@Body() body: CreateUserDto) {
    return this.usersService.dangKy(body);

  }
  @Post('check-sodt')
  checkSoDt(@Body() body: CheckSoDtUserDto) {
    return this.usersService.checkSoDt(body);

  }
  @Post('dang-nhap')
  dangNhap(@Body() body: DangNhapDto) {
    return this.usersService.dangNhap(body);
  }
  //của nodejs
  @Post('dem-luot-truy-cap')
  demLuotTruyCap(@Body() body: DemLuotTruyCapDto) {
    return this.usersService.demLuotTruyCap(body);
  }
  @Post('dang-ky-nhan-li-xi')
  dangKyNhanLiXi(@Body() body: DangKyNhanLiXiDto) {
    return this.usersService.dangKyNhanLiXi(body);
  }
  @Post('update-li-xi')
  capNhatTienLiXi(@Body() body: CapNhatTienLiXiDto) {
    return this.usersService.capNhatTienLiXi(body);
  }
  @Post('check-thong-tin')
  checkThongTin(@Body() body: CheckThongTinDto) {
    return this.usersService.checkThongTin(body);
  }
  @Get('get-list-nguoi-tham-gia')
  listNguoiThamGia() {
    return this.usersService.listNguoiThamGia();
  }





}
