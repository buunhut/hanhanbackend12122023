import { CreateDoiTacDto, UpdateDoiTacDto } from './dto/create-doi-tac.dto';
import { ExtraService } from 'src/service';
export declare class DoiTacService {
    private readonly extraService;
    constructor(extraService: ExtraService);
    create(token: string, body: CreateDoiTacDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    findNpp(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    findKh(token: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateNpp(token: string, body: UpdateDoiTacDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    updateKh(token: string, body: UpdateDoiTacDto): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    searchNpp(token: string, keyword: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    searchKh(token: string, keyword: string): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
    remove(token: string, dtId: number): Promise<{
        statusCode: number;
        message: string;
        content: any;
    }>;
}
