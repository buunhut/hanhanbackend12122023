export declare class CreateUserDto {
    hoTen: string;
    diaChi: string;
    soDt: string;
    matKhau: string;
}
export declare class CheckSoDtUserDto {
    soDt: string;
}
export declare class DangNhapDto {
    soDt: string;
    matKhau: string;
}
export declare class DemLuotTruyCapDto {
    ngay: Date;
    soLuong: number;
    diaChi: string;
}
export declare class DangKyNhanLiXiDto {
    ngay: Date;
    hoVaTen: string;
    soDienThoai: string;
    soTaiKhoan: string;
    nganHang: string;
    liXi: number;
    loiChuc: string;
}
export declare class CapNhatTienLiXiDto {
    lxId: number;
    liXi: number;
    ghiChu: string;
}
export declare class CheckThongTinDto {
    thongTin: string;
}
