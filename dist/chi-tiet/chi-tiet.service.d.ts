import { CreateChiTietDto } from './dto/create-chi-tiet.dto';
import { UpdateChiTietDto } from './dto/update-chi-tiet.dto';
import { ExtraService } from 'src/service';
export declare class ChiTietService {
    private readonly extraService;
    constructor(extraService: ExtraService);
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
    findOne(id: number): string;
    update(id: number, updateChiTietDto: UpdateChiTietDto): string;
    remove(token: string, dId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
