import { ApiProperty } from "@nestjs/swagger";


export class DonHangDto {
    @ApiProperty({ type: 'number' })
    uId: number;
    @ApiProperty({ type: 'number' })
    sId: number;
    @ApiProperty({ type: 'number' })
    tienHang: number;
    @ApiProperty({ type: 'number' })
    traVi: number;
    @ApiProperty({ type: 'number' })
    phiVc: number;
    @ApiProperty({ type: 'number' })
    diemTichLuy: number;
    @ApiProperty({ type: 'string' })
    ghiChu: string;
    @ApiProperty({ type: 'string' })
    trangThai: string;
  }
  
  export class chiTietDonHangDto {
    @ApiProperty({ type: 'number' })
    spId: number;
    @ApiProperty({ type: 'string' })
    tenSp: string;
    @ApiProperty({ type: 'string' })
    dvt: string;
    @ApiProperty({ type: 'number' })
    soLuong: number;
    @ApiProperty({ type: 'number' })
    kId: number;
    @ApiProperty({ type: 'number' })
    quyDoi: number;
    @ApiProperty({ type: 'number' })
    donGia: number;
  }
  
  export class CreateDonHangDto {
    @ApiProperty({ type: DonHangDto })
    donHang: DonHangDto;
    @ApiProperty({ type: [chiTietDonHangDto] })
    chiTietDonHang: chiTietDonHangDto[]; // Mảng chứa nhiều sản phẩm
  }
  
  export class UpdateNguoiGiaoDto {
    @ApiProperty({ type: 'number' })
    oId: number;
    @ApiProperty({ type: 'string' })
    nguoiGiao: string; // Mảng chứa nhiều sản phẩm
  }
  
  export class UpdateThanhToanDto {
    @ApiProperty({ type: 'number' })
    oId: number;
    @ApiProperty({ type: 'number' })
    thanhToan: number;
  }
  
  export class SortDto {
    @ApiProperty({ type: 'string' })
    trangThai: string;
    @ApiProperty({ type: 'string' })
    nguoiGiao: string;
    @ApiProperty({ type: 'string', format: 'date' })
    from: Date;
    @ApiProperty({ type: 'string', format: 'date' })
    to: Date;
    @ApiProperty({ type: 'string' })
    keyword: string
  }
  
  