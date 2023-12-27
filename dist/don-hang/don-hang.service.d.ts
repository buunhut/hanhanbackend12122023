import { CreateDonHangDto, SortDto, UpdateNguoiGiaoDto, UpdateThanhToanDto } from './dto/create-don-hang.dto';
import { ExtraService } from 'src/service';
export declare class DonHangService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    create(token: string, body: CreateDonHangDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    chiTietDonHangByUser(token: string, uId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    huyDonHang(token: string, oId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    chiTietDonHangByShop(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    inDonHangByShop(token: string, oId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    capNhatNguoiGiao(token: string, body: UpdateNguoiGiaoDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    capNhatThanhToan(token: string, body: UpdateThanhToanDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    sortDonHang(token: string, body: SortDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getListTrangThai(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getVi(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    donHangChoXuLyByShop(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
