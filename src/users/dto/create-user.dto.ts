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
