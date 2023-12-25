import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CheckSoDtUserDto, CreateUserDto, DangNhapDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

// @UseGuards(AuthGuard)
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('/san-pham-theo-danh-muc')
  // getSanPhamByDanhMuc() {
  //   return this.usersService.getSanPhamByDanhMuc();
  // }
  // @Get('/search-san-pham-theo-danh-muc/:keyword')
  // searchSanPhamByDanhMuc(@Param('keyword') keyword: string) {
  //   return this.usersService.searchSanPhamByDanhMuc(keyword);
  // }

  // @Get('/san-pham-theo-thuong-hieu')
  // getSanPhamByThuongHieu() {
  //   return this.usersService.getSanPhamByThuongHieu();
  // }
  // @Get('/search-san-pham-theo-thuong-hieu/:keyword')
  // searchSanPhamByThuongHieu(@Param('keyword') keyword: string) {
  //   return this.usersService.searchSanPhamByThuongHieu(keyword);
  // }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

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


}
