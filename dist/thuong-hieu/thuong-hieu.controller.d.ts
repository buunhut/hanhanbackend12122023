import { ThuongHieuService } from './thuong-hieu.service';
import { CreateThuongHieuDto, UpdateThuongHieuDto } from './dto/create-thuong-hieu.dto';
export declare class ThuongHieuController {
    private readonly thuongHieuService;
    constructor(thuongHieuService: ThuongHieuService);
    read(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    create(token: string, body: CreateThuongHieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    update(token: string, body: UpdateThuongHieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    delete(token: string, thId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    search(token: string, keyword: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
