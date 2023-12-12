import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { SanPhamModule } from './san-pham/san-pham.module';
import { KhoModule } from './kho/kho.module';
import { ThuongHieuModule } from './thuong-hieu/thuong-hieu.module';
import { DanhMucModule } from './danh-muc/danh-muc.module';
import { ShopsModule } from './shops/shops.module';
import { TkNganHangModule } from './tk-ngan-hang/tk-ngan-hang.module';
import { PhieuModule } from './phieu/phieu.module';
import { ChiTietModule } from './chi-tiet/chi-tiet.module';
import { NhanVienModule } from './nhan-vien/nhan-vien.module';
import { DoiTacModule } from './doi-tac/doi-tac.module';
import { UsersModule } from './users/users.module';
import { DonHangModule } from './don-hang/don-hang.module';
import { ChiTietDonHangModule } from './chi-tiet-don-hang/chi-tiet-don-hang.module';
import { ExtraService } from './service';
import { ShopsController } from './shops/shops.controller';
import { ChiTietController } from './chi-tiet/chi-tiet.controller';
import { ChiTietDonHangController } from './chi-tiet-don-hang/chi-tiet-don-hang.controller';
import { DanhMucController } from './danh-muc/danh-muc.controller';
import { DoiTacController } from './doi-tac/doi-tac.controller';
import { DonHangController } from './don-hang/don-hang.controller';
import { KhoController } from './kho/kho.controller';
import { NhanVienController } from './nhan-vien/nhan-vien.controller';
import { PhieuController } from './phieu/phieu.controller';
import { SanPhamController } from './san-pham/san-pham.controller';
import { ThuongHieuController } from './thuong-hieu/thuong-hieu.controller';
import { TkNganHangController } from './tk-ngan-hang/tk-ngan-hang.controller';
import { UsersController } from './users/users.controller';
import { ChiTietService } from './chi-tiet/chi-tiet.service';
import { ChiTietDonHangService } from './chi-tiet-don-hang/chi-tiet-don-hang.service';
import { DanhMucService } from './danh-muc/danh-muc.service';
import { DoiTacService } from './doi-tac/doi-tac.service';
import { DonHangService } from './don-hang/don-hang.service';
import { KhoService } from './kho/kho.service';
import { NhanVienService } from './nhan-vien/nhan-vien.service';
import { PhieuService } from './phieu/phieu.service';
import { SanPhamService } from './san-pham/san-pham.service';
import { ShopsService } from './shops/shops.service';
import { ThuongHieuService } from './thuong-hieu/thuong-hieu.service';
import { TkNganHangService } from './tk-ngan-hang/tk-ngan-hang.service';
import { UsersService } from './users/users.service';
import { config } from 'dotenv';
config({
  path: './.env',
});

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Thay thế bằng secret key của bạn
      signOptions: { expiresIn: '365d' }, // Thời gian hết hạn của token
    }),
  ],
  controllers: [
    AppController, 
    ChiTietController, 
    ChiTietDonHangController, 
    DanhMucController,
    DoiTacController,
    DonHangController,
    KhoController,
    NhanVienController,
    PhieuController,
    SanPhamController,
    ShopsController, 
    ThuongHieuController,
    TkNganHangController,
    UsersController,
  ],
  providers: [
    AppService,
    ChiTietService,
    ChiTietDonHangService,
    DanhMucService,
    DoiTacService,
    DonHangService,
    KhoService,
    NhanVienService,
    PhieuService,
    SanPhamService,
    ShopsService,
    ThuongHieuService,
    TkNganHangService,
    UsersService,
    ExtraService],
})
export class AppModule {}
