import { CreatePhieuDto, LuuPhieuDto, SortPhieuDto, SuaChiTietDto, TraNoMotPhieuDto } from './dto/create-phieu.dto';
import { UpdatePhieuDto } from './dto/update-phieu.dto';
import { ExtraService } from 'src/service';
export declare class PhieuService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    create(createPhieuDto: CreatePhieuDto): string;
    findAllSanPham(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    search(token: string, keyword: string): Promise<{
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
    suaChiTiet(token: string, body: SuaChiTietDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    findOne(id: number): string;
    update(id: number, updatePhieuDto: UpdatePhieuDto): string;
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
}
