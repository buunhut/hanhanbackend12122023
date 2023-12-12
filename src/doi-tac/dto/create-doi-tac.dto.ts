import { ApiProperty } from "@nestjs/swagger";

export class CreateDoiTacDto {
    @ApiProperty({type: 'string'})
    loaiDt: string
}
export class UpdateDoiTacDto {
    @ApiProperty({type: 'number'})
    dtId: number
    @ApiProperty({type: 'string'})
    maDoiTac: string
    @ApiProperty({type: 'string'})
    tenDoiTac: string
    @ApiProperty({type: 'string'})
    diaChi: string
    @ApiProperty({type: 'string'})
    mst: string
    @ApiProperty({type: 'string'})
    soDt: string
    @ApiProperty({type: 'string'})
    nguoiLienHe: string
}
