import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Put } from '@nestjs/common';
import { ChiTietService } from './chi-tiet.service';
import { CreateChiTietDto } from './dto/create-chi-tiet.dto';
import { UpdateChiTietDto } from './dto/update-chi-tiet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('chiTiet')
@Controller('chi-tiet')
export class ChiTietController {
  constructor(private readonly chiTietService: ChiTietService) {}

  @Post('/them-chi-tiet')
  create(@Headers('token') token: string, @Body() body: CreateChiTietDto) {
    return this.chiTietService.create( token, body);
  }

  @Get('/get-chi-tiet-nhap')
  getChiTietNhap(@Headers('token') token: string) {
    return this.chiTietService.getChiTietNhap(token);
  }
  @Get('/get-chi-tiet-xuat')
  getChiTietXuat(@Headers('token') token: string) {
    return this.chiTietService.getChiTietXuat(token);
  }
  @Get('/tim-chi-tiet-nhap/:keyword')
  timChiTietNhap(@Headers('token') token: string, @Param('keyword') keyword: string) {
    return this.chiTietService.timChiTietNhap(token, keyword);
  }
  @Put('sua-chi-tiet-da-luu/:pId')
  suaChiTietDaLuu(@Headers('token') token: string, @Param('pId') pId: number){
    return this.chiTietService.suaChiTietDaLuu(token, +pId);

  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.chiTietService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateChiTietDto: UpdateChiTietDto) {
  //   return this.chiTietService.update(+id, updateChiTietDto);
  // }

  @Delete('xoa-chi-tiet/:dId')
  remove(@Headers('token') token: string, @Param('dId') dId: number) {
    return this.chiTietService.remove(token, +dId);
  }
}
