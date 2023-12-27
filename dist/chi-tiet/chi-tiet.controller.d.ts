import { ChiTietService } from './chi-tiet.service';
import { CreateChiTietDto } from './dto/create-chi-tiet.dto';
export declare class ChiTietController {
    private readonly chiTietService;
    constructor(chiTietService: ChiTietService);
    create(token: string, body: CreateChiTietDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getChiTietNhap(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    timChiTietNhap(token: string, keyword: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    suaChiTietDaLuu(token: string, pId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    remove(token: string, dId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
