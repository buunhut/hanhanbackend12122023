/// <reference types="multer" />
import { UploadDanhMucDto, UploadSanPhamDto, UploadThuongHieuDto } from './app.dto';
import { ExtraService } from './service';
export declare class AppService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    uploadHinhDanhMuc(token: string, body: UploadDanhMucDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    deleteHinhDanhMuc(token: string, dmId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    uploadHinhThuongHieu(token: string, body: UploadThuongHieuDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    deleteHinhThuongHieu(token: string, thId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    uploadHinhSanPham(token: string, body: UploadSanPhamDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    deleteHinhSanPham(token: string, spId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
