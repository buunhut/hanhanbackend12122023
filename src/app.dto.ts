import { ApiProperty } from "@nestjs/swagger"

export class UploadDanhMucDto {
    @ApiProperty({type: 'number'})
    dmId: number
    @ApiProperty({type: 'string', format: 'binary'})
    hinhAnh?: string
}
export class UploadThuongHieuDto {
    @ApiProperty({type: 'number'})
    thId: number
    @ApiProperty({type: 'string', format: 'binary'})
    hinhAnh?: string
}
export class UploadSanPhamDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'string', format: 'binary'})
    hinhAnh?: string
}