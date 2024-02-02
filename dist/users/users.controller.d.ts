import { UsersService } from './users.service';
import { CapNhatTienLiXiDto, CheckSoDtUserDto, CheckThongTinDto, CreateUserDto, DangKyNhanLiXiDto, DangNhapDto, DemLuotTruyCapDto } from './dto/create-user.dto';
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
    demLuotTruyCap(body: DemLuotTruyCapDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    dangKyNhanLiXi(body: DangKyNhanLiXiDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    capNhatTienLiXi(body: CapNhatTienLiXiDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    checkThongTin(body: CheckThongTinDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    listNguoiThamGia(): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
