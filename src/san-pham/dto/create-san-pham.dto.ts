import { ApiProperty } from "@nestjs/swagger";

export class CreateSanPhamDto {
    @ApiProperty({type: 'number'})
    thId: number
}


export class UpdateDanhMucSanPhamDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    dmId: number
}
export class UpdateThuongHieuSanPhamDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    thId: number
}
export class UpdateMaSpDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'string'})
    maSp: string
}
export class UpdateTenSpDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'string'})
    tenSp: string
}
export class UpdateGiaNhapDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    giaNhap: number
}
export class UpdateGiaBanDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    giaBan: number
}
export class UpdateGiaGiamDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    giaGiam: number
}
export class UpdatePhiVcDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    phiVc: number
}
export class UpdateDvtDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'string'})
    dvt: string
}
export class UpdateQuyDoiDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    quyDoi: number
}
export class UpdateMaxOrderDto {
    @ApiProperty({type: 'number'})
    spId: number
    @ApiProperty({type: 'number'})
    maxOrder: number
}
