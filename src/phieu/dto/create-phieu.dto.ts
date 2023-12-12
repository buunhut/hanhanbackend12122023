import { ApiProperty } from "@nestjs/swagger";

export class CreatePhieuDto {
    @ApiProperty({type: 'string', format: 'date'})
    ngay: Date
    @ApiProperty({type: 'number'})
    dtId: number
    @ApiProperty({type: 'string'})
    loaiPhieu: string
}
export class SuaChiTietDto {
    @ApiProperty({type: 'number'})
    dId: number
    @ApiProperty({type: 'number'})
    donGia: number
    @ApiProperty({type: 'number'})
    soLuong: number
}
export class LuuPhieuDto {
    @ApiProperty({type: 'number'})
    pId: number
    @ApiProperty({type: 'number'})
    soTien: number
    @ApiProperty({type: 'number'})
    thanhToan: number
    @ApiProperty({type: 'string'})
    ghiChu: string
}
export class TraNoMotPhieuDto {
    @ApiProperty({type: 'number'})
    pId: number
    @ApiProperty({type: 'number'})
    thanhToan: number
}


