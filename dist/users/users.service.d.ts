import { CheckSoDtUserDto, CreateUserDto, DangNhapDto } from './dto/create-user.dto';
import { ExtraService } from 'src/service';
export declare class UsersService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    getTatCaSanPham(): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    timKiemSanPham(keyword: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getTatCaSanPhamByDanhMuc(): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getTatCaSanPhamByThuongHieu(): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    dangKy(body: CreateUserDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    checkSoDt(body: CheckSoDtUserDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    dangNhap(body: DangNhapDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
