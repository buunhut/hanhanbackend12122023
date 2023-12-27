import { UsersService } from './users.service';
import { CheckSoDtUserDto, CreateUserDto, DangNhapDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
