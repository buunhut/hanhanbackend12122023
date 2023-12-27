import { UpdateNhanVienDto } from './dto/create-nhan-vien.dto';
import { ExtraService } from 'src/service';
export declare class NhanVienService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    create(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    findAll(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    findOne(id: number): string;
    update(token: string, body: UpdateNhanVienDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    delete(token: string, nvId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
