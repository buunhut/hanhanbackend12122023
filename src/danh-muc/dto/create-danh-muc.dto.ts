import { ApiProperty } from "@nestjs/swagger";

export class UpdateDanhMucDto {
    @ApiProperty({type: 'number'})
    dmId: number
    @ApiProperty({type: 'string'})
    tenDanhMuc: string
}
