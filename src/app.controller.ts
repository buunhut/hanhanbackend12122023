import {
  Body,
  Controller,
  Delete,
  Headers,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  UploadDanhMucDto,
  UploadSanPhamDto,
  UploadThuongHieuDto,
} from './app.dto';
import { AuthGuard } from './service';

@UseGuards(AuthGuard)
@ApiTags('upload')
@Controller('upload')
export class AppController {
  constructor(private readonly appService: AppService) {}
  //up hinh danh mục
  @ApiConsumes('multipart/form-data')
  @Post('/up-hinh-danh-muc')
  @UseInterceptors(
    FileInterceptor('hinhAnh', {
      // Tham số 2: định nghĩa nơi lưu, và lưu tên mới cho file
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname), // null: tham số báo lỗi
      }),
    }),
  )
  uploadHinhDanhMuc(
    @Headers('token') token: string,
    @Body() body: UploadDanhMucDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.appService.uploadHinhDanhMuc(token, body, file);
  }

  @Delete('xoa-hinh-danh-muc/:dmId')
  deleteHinhDanhMuc(
    @Headers('token') token: string,
    @Param('dmId') dmId: number,
  ) {
    return this.appService.deleteHinhDanhMuc(token, +dmId);
  }

  //up hinh thương hiệu
  @ApiConsumes('multipart/form-data')
  @Post('/up-hinh-thuong-hieu')
  @UseInterceptors(
    FileInterceptor('hinhAnh', {
      // Tham số 2: định nghĩa nơi lưu, và lưu tên mới cho file
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname), // null: tham số báo lỗi
      }),
    }),
  )
  uploadHinhThuongHieu(
    @Headers('token') token: string,
    @Body() body: UploadThuongHieuDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.appService.uploadHinhThuongHieu(token, body, file);
  }

  @Delete('xoa-hinh-thuong-hieu/:thId')
  deleteHinhThuongHieu(
    @Headers('token') token: string,
    @Param('thId') thId: number,
  ) {
    return this.appService.deleteHinhThuongHieu(token, +thId);
  }

  //up hinh sản phẩm
  @ApiConsumes('multipart/form-data')
  @Post('/up-hinh-san-pham')
  @UseInterceptors(
    FileInterceptor('hinhAnh', {
      // Tham số 2: định nghĩa nơi lưu, và lưu tên mới cho file
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) =>
          callback(null, new Date().getTime() + '_' + file.originalname), // null: tham số báo lỗi
      }),
    }),
  )
  uploadHinhSanPham(
    @Headers('token') token: string,
    @Body() body: UploadSanPhamDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.appService.uploadHinhSanPham(token, body, file);
  }

  @Delete('xoa-hinh-san-pham/:spId')
  deleteHinhSanPham(
    @Headers('token') token: string,
    @Param('spId') spId: number,
  ) {
    return this.appService.deleteHinhSanPham(token, +spId);
  }
}
