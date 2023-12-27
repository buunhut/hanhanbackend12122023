import { CreateShopDto, ShopLoginDto, TaoCauHinhDto } from './dto/create-shop.dto';
import { ExtraService } from 'src/service';
export declare class ShopsService {
    private readonly extraService;
    constructor(extraService: ExtraService);
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
    getCauHinh(sId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    tatMoShop(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
