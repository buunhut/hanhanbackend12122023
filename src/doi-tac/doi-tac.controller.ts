import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Put } from '@nestjs/common';
import { DoiTacService } from './doi-tac.service';
import { CreateDoiTacDto, UpdateDoiTacDto } from './dto/create-doi-tac.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('doiTac')
@Controller('doi-tac')
export class DoiTacController {
  constructor(private readonly doiTacService: DoiTacService) {}

  @Post('/tao-doi-tac')
  create(@Headers('token') token: string, @Body() body: CreateDoiTacDto) {
    return this.doiTacService.create(token, body);
  }

  @Get('/get-npp')
  findNpp(@Headers('token') token: string) {
    return this.doiTacService.findNpp(token);
  }
  @Get('/get-khach-hang')
  findKh(@Headers('token') token: string) {
    return this.doiTacService.findKh(token);
  }

  @Put('/cap-nhat-npp')
  updateNpp(@Headers('token') token: string, @Body() body: UpdateDoiTacDto) {
    return this.doiTacService.updateNpp(token, body);
  }
  @Put('/cap-nhat-khach-hang')
  updateKh(@Headers('token') token: string, @Body() body: UpdateDoiTacDto) {
    return this.doiTacService.updateKh(token, body);
  }

  @Get('tim-npp/:keyword')
  searchNpp(@Headers('token') token: string, @Param('keyword') keyword: string){
    return this.doiTacService.searchNpp(token, keyword);

  }
  @Get('tim-khach-hang/:keyword')
  searchKh(@Headers('token') token: string, @Param('keyword') keyword: string){
    return this.doiTacService.searchKh(token, keyword);

  }

  @Delete('/xoa-doi-tac/:dtId')
  remove(@Headers('token') token: string, @Param('dtId') dtId: number) {
    return this.doiTacService.remove(token, +dtId);
  }
}
