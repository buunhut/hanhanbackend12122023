import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { DonHangService } from './don-hang.service';
import { CreateDonHangDto, SortDto, UpdateNguoiGiaoDto, UpdateThanhToanDto } from './dto/create-don-hang.dto';
import { UpdateDonHangDto } from './dto/update-don-hang.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

@UseGuards(AuthGuard)
@ApiTags('donHang')
@Controller('don-hang')
export class DonHangController {
  constructor(private readonly donHangService: DonHangService) {}

  @Post('/xac-nhan-don-hang')
  create(@Headers('token') token: string, @Body() body: CreateDonHangDto) {
    return this.donHangService.create(token, body);
  }

  @Get('/chi-tiet-don-hang-by-user/:uId')
  chiTietDonHangByUser(@Headers('token') token: string, @Param('uId') uId: number) {
    return this.donHangService.chiTietDonHangByUser(token, +uId);
  }
  @Delete('huy-don-hang/:oId')
  huyDonHang(@Headers('token') token: string, @Param('oId') oId: number) {
    return this.donHangService.huyDonHang(token, +oId);
  }

  @Get('chi-tiet-don-hang-by-shop')
  chiTietDonHangByShop(@Headers('token') token: string) {
    return this.donHangService.chiTietDonHangByShop(token);
  }
  @Get('in-don-hang-by-shop/:oId')
  inDonHangByShop(@Headers('token') token: string, @Param('oId') oId: number) {
    return this.donHangService.inDonHangByShop(token, +oId);
  }

  @Post('cap-nhat-nguoi-giao') 
  capNhatNguoiGiao(@Headers('token') token: string, @Body() body: UpdateNguoiGiaoDto) {
    return this.donHangService.capNhatNguoiGiao(token, body);

  }
  @Post('cap-nhat-thanh-toan') 
  capNhatThanhToan(@Headers('token') token: string, @Body() body: UpdateThanhToanDto) {
    return this.donHangService.capNhatThanhToan(token, body);
  }
  @Post('sort-don-hang') 
  sortDonHang(@Headers('token') token: string, @Body() body: SortDto) {
    return this.donHangService.sortDonHang(token, body);
  }

  @Get('/get-list-trang-thai')
  getListTrangThai(@Headers('token') token: string) {
    return this.donHangService.getListTrangThai(token);
  }


  //ví
  @Get('/get-vi')
  getVi(@Headers('token') token: string) {
    return this.donHangService.getVi(token);
  }


  // @Post('sort-nguoi-giao') 
  // sortNguoiGiao(@Headers('token') token: string, @Body() body: SortDto) {
  //   return this.donHangService.sortNguoiGiao(token, body);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.donHangService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDonHangDto: UpdateDonHangDto) {
  //   return this.donHangService.update(+id, updateDonHangDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.donHangService.remove(+id);
  // }
}
