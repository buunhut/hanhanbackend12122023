import { ApiProperty } from "@nestjs/swagger";

export class CreateShopDto {
    @ApiProperty({type: 'string'})
    taiKhoan: string
    @ApiProperty({type: 'string'})
    matKhau: string
    @ApiProperty({type: 'string'})
    tenShop: string
    @ApiProperty({type: 'string'})
    diaChi: string
    @ApiProperty({type: 'string'})
    soDt: string
    @ApiProperty({type: 'string'})
    nguoiLienHe: string
}
export class ShopLoginDto {
    @ApiProperty({type: 'string'})
    taiKhoan: string
    @ApiProperty({type: 'string'})
    matKhau: string
}
export class TaoCauHinhDto {
    @ApiProperty({type: 'number'})
    mienPhiVc: number
    @ApiProperty({type: 'number'})
    phiVc: number
    @ApiProperty({type: 'number'})
    hoanTien: number
    @ApiProperty({type: 'number'})
    mucHoan: number  //đúng không
    @ApiProperty({type: 'number'})
    sId: number
}
