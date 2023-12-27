import { TkNganHangService } from './tk-ngan-hang.service';
import { CreateTkNganHangDto } from './dto/create-tk-ngan-hang.dto';
import { UpdateTkNganHangDto } from './dto/update-tk-ngan-hang.dto';
export declare class TkNganHangController {
    private readonly tkNganHangService;
    constructor(tkNganHangService: TkNganHangService);
    create(createTkNganHangDto: CreateTkNganHangDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTkNganHangDto: UpdateTkNganHangDto): string;
    remove(id: string): string;
}
