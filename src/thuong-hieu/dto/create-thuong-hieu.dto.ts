import { ApiProperty } from "@nestjs/swagger"

export class CreateThuongHieuDto {
    @ApiProperty({type: 'number'})
    dmId: number
}
export class UpdateThuongHieuDto {
    @ApiProperty({type: 'number'})
    thId: number
    @ApiProperty({type: 'string'})
    tenThuongHieu: string
}
