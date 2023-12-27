import { ShopsService } from './shops.service';
import { CreateShopDto, ShopLoginDto, TaoCauHinhDto } from './dto/create-shop.dto';
export declare class ShopsController {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    create(body: CreateShopDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    login(body: ShopLoginDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    taoCauHinh(token: string, body: TaoCauHinhDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    tatMoShop(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getCauHinh(sId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
