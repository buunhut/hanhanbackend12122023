export declare class DonHangDto {
    uId: number;
    sId: number;
    tienHang: number;
    traVi: number;
    phiVc: number;
    diemTichLuy: number;
    ghiChu: string;
    trangThai: string;
}
export declare class chiTietDonHangDto {
    spId: number;
    tenSp: string;
    dvt: string;
    soLuong: number;
    kId: number;
    quyDoi: number;
    donGia: number;
}
export declare class CreateDonHangDto {
    donHang: DonHangDto;
    chiTietDonHang: chiTietDonHangDto[];
}
export declare class UpdateNguoiGiaoDto {
    oId: number;
    nguoiGiao: string;
}
export declare class UpdateThanhToanDto {
    oId: number;
    thanhToan: number;
}
export declare class SortDto {
    trangThai: string;
    nguoiGiao: string;
    from: Date;
    to: Date;
    keyword: string;
}
