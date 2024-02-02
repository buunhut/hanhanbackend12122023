import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: 'string' })
  hoTen: string;
  @ApiProperty({ type: 'string' })
  diaChi: string;
  @ApiProperty({ type: 'string' })
  soDt: string;
  @ApiProperty({ type: 'string' })
  matKhau: string;
}
export class CheckSoDtUserDto {
  @ApiProperty({ type: 'string' })
  soDt: string;
}
export class DangNhapDto {
  @ApiProperty({ type: 'string' })
  soDt: string;
  @ApiProperty({ type: 'string' })
  matKhau: string;
}
export class DemLuotTruyCapDto {
  @ApiProperty({type: 'string', format: 'date-time'})
  ngay: Date;
  @ApiProperty({ type: 'number' })
  soLuong: number;
  @ApiProperty({ type: 'string' })
  diaChi: string;
}
export class DangKyNhanLiXiDto {
  @ApiProperty({type: 'string', format: 'date-time'})
  ngay: Date;
  @ApiProperty({ type: 'string' })
  hoVaTen: string;
  @ApiProperty({ type: 'string' })
  soDienThoai: string;
  @ApiProperty({ type: 'string' })
  soTaiKhoan: string;
  @ApiProperty({ type: 'string' })
  nganHang: string;
  @ApiProperty({ type: 'number' })
  liXi: number;
  @ApiProperty({ type: 'string' })
  loiChuc: string;
}
export class CapNhatTienLiXiDto {
  @ApiProperty({ type: 'number' })
  lxId: number;
  @ApiProperty({ type: 'number' })
  liXi: number;
  @ApiProperty({ type: 'string' })
  ghiChu: string;
}
export class CheckThongTinDto {
  @ApiProperty({ type: 'string' })
  thongTin: string;
}
