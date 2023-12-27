import { ChiTietDonHangService } from './chi-tiet-don-hang.service';
import { CreateChiTietDonHangDto } from './dto/create-chi-tiet-don-hang.dto';
import { UpdateChiTietDonHangDto } from './dto/update-chi-tiet-don-hang.dto';
export declare class ChiTietDonHangController {
    private readonly chiTietDonHangService;
    constructor(chiTietDonHangService: ChiTietDonHangService);
    create(createChiTietDonHangDto: CreateChiTietDonHangDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChiTietDonHangDto: UpdateChiTietDonHangDto): string;
    remove(id: string): string;
}
