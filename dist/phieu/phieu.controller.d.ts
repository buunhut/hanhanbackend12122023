import { PhieuService } from './phieu.service';
import { CreatePhieuDto, LuuPhieuDto, SortPhieuDto, SuaChiTietDto, TraNoMotPhieuDto } from './dto/create-phieu.dto';
export declare class PhieuController {
    private readonly phieuService;
    constructor(phieuService: PhieuService);
    findAllSanPham(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    searchSanPham(token: string, keyword: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    taoPhieu(token: string, body: CreatePhieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getPhieuNhapMoiTao(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getPhieuXuatMoiTao(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    getPhieuNhap(token: string, pId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    suaChiTiet(token: string, body: SuaChiTietDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    xoaPhieuMoiTao(token: string, pId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    luuPhieuMoiTao(token: string, body: LuuPhieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    traNoMotPhieu(token: string, body: TraNoMotPhieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    sortPhieu(token: string, body: SortPhieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    sortPhieuXuat(token: string, body: SortPhieuDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
