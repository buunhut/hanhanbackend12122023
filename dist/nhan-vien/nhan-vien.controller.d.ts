import { NhanVienService } from './nhan-vien.service';
import { UpdateNhanVienDto } from './dto/create-nhan-vien.dto';
export declare class NhanVienController {
    private readonly nhanVienService;
    constructor(nhanVienService: NhanVienService);
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
    findOne(id: string): string;
    update(token: string, body: UpdateNhanVienDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    delete(token: string, nvId: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
