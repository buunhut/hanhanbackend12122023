import { CreateTkNganHangDto } from './dto/create-tk-ngan-hang.dto';
import { UpdateTkNganHangDto } from './dto/update-tk-ngan-hang.dto';
export declare class TkNganHangService {
    create(createTkNganHangDto: CreateTkNganHangDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTkNganHangDto: UpdateTkNganHangDto): string;
    remove(id: number): string;
}
