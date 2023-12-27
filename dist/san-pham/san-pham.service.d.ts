import { CreateSanPhamDto, UpdateDvtDto, UpdateGiaBanDto, UpdateGiaGiamDto, UpdateGiaNhapDto, UpdateMaSpDto, UpdateMaxOrderDto, UpdatePhiVcDto, UpdateQuyDoiDto, UpdateTenSpDto } from './dto/create-san-pham.dto';
import { ExtraService } from 'src/service';
export declare class SanPhamService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    create(token: string, body: CreateSanPhamDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    createDvt(token: string, kId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    readSanPham(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateMaSp(token: string, body: UpdateMaSpDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateTenSp(token: string, body: UpdateTenSpDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateDvt(token: string, body: UpdateDvtDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateGiaNhap(token: string, body: UpdateGiaNhapDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateGiaBan(token: string, body: UpdateGiaBanDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateGiaGiam(token: string, body: UpdateGiaGiamDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updatePhiVc(token: string, body: UpdatePhiVcDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateQuyDoi(token: string, body: UpdateQuyDoiDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateMaxOrder(token: string, body: UpdateMaxOrderDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateSho(token: string, spId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    delete(token: string, spId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
