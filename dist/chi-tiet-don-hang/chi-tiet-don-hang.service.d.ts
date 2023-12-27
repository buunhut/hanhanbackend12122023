import { CreateChiTietDonHangDto } from './dto/create-chi-tiet-don-hang.dto';
import { UpdateChiTietDonHangDto } from './dto/update-chi-tiet-don-hang.dto';
export declare class ChiTietDonHangService {
    create(createChiTietDonHangDto: CreateChiTietDonHangDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChiTietDonHangDto: UpdateChiTietDonHangDto): string;
    remove(id: number): string;
}
