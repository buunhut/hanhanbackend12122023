import { ApiProperty } from "@nestjs/swagger";

export class CreateChiTietDto {
    @ApiProperty({type: 'number'})
    pId: number
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'string'})
    tenSp: string
    @ApiProperty({type: 'string'})
    dvt: string
    @ApiProperty({type: 'number'})
    kId: number
    @ApiProperty({type: 'number'})
    quyDoi: number
    @ApiProperty({type: 'number'})
    soLuong: number
    @ApiProperty({type: 'number'})
    donGia: number
}
