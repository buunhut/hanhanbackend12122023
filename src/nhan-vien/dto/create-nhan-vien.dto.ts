import { ApiProperty } from "@nestjs/swagger";

export class CreateNhanVienDto {}

export class UpdateNhanVienDto {
    @ApiProperty({type: 'number'})
    nvId: number
    @ApiProperty({type: 'string'})
    tenNhanVien: string
    @ApiProperty({type: 'string'})
    soDt: string
    @ApiProperty({type: 'string'})
    diaChi: string
    @ApiProperty({type: 'string'})
    chucVu: string
    @ApiProperty({type: 'number'})
    mucLuong: number
    @ApiProperty({type: 'number'})
    sId: number
    @ApiProperty({type: 'number'})
    sta: number
}
