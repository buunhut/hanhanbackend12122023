import { ExtraService } from 'src/service';
import { UpdateDanhMucDto } from './dto/create-danh-muc.dto';
export declare class DanhMucService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    read(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    create(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    update(token: string, body: UpdateDanhMucDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    delete(token: string, dmId: number): Promise<{
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
