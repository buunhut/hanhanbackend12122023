import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto, ShopLoginDto, TaoCauHinhDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

@ApiTags('shops')
@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post('/dang-ky')
  create(@Body() body: CreateShopDto) {
    return this.shopsService.create(body);
  }
  @Post('/dang-nhap')
  login(@Body() body: ShopLoginDto) {
    return this.shopsService.login(body);
  }
  @UseGuards(AuthGuard)
  @Post('/tao-cau-hinh')
  taoCauHinh(@Headers('token') token: string, @Body() body: TaoCauHinhDto) {
    return this.shopsService.taoCauHinh(token, body);
  }
  @Get('/get-cau-hinh/:sId')
  getCauHinh(@Param('sId') sId: number) {
    return this.shopsService.getCauHinh(+sId);
  }
}

