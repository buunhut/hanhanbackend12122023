import { ApiProperty } from "@nestjs/swagger";

export class CreatePhieuDto {
    @ApiProperty({type: 'string', format: 'date'})
    ngay: Date
    // @ApiProperty({type: 'number'})
    // dtId: number
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
export class SuaDoiTacDto {
    @ApiProperty({type: 'number'})
    pId: number
    @ApiProperty({type: 'number'})
    dtId: number
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

export class SortPhieuDto {
    @ApiProperty({type: 'string', format: 'date'})
    from: Date
    @ApiProperty({type: 'string', format: 'date'})
    to: Date
    @ApiProperty({type: 'number'})
    dtId: number
    @ApiProperty({type: 'string'})
    locNo: string
}


