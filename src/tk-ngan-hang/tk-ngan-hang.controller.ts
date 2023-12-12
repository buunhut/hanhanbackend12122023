import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TkNganHangService } from './tk-ngan-hang.service';
import { CreateTkNganHangDto } from './dto/create-tk-ngan-hang.dto';
import { UpdateTkNganHangDto } from './dto/update-tk-ngan-hang.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tkNganHang')
@Controller('tk-ngan-hang')
export class TkNganHangController {
  constructor(private readonly tkNganHangService: TkNganHangService) {}

  @Post()
  create(@Body() createTkNganHangDto: CreateTkNganHangDto) {
    return this.tkNganHangService.create(createTkNganHangDto);
  }

  @Get()
  findAll() {
    return this.tkNganHangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tkNganHangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTkNganHangDto: UpdateTkNganHangDto) {
    return this.tkNganHangService.update(+id, updateTkNganHangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tkNganHangService.remove(+id);
  }
}
