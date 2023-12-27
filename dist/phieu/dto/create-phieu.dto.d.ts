export declare class CreatePhieuDto {
    ngay: Date;
    dtId: number;
    loaiPhieu: string;
}
export declare class SuaChiTietDto {
    dId: number;
    donGia: number;
    soLuong: number;
}
export declare class LuuPhieuDto {
    pId: number;
    soTien: number;
    thanhToan: number;
    ghiChu: string;
}
export declare class TraNoMotPhieuDto {
    pId: number;
    thanhToan: number;
}
export declare class SortPhieuDto {
    from: Date;
    to: Date;
    dtId: number;
    locNo: string;
}