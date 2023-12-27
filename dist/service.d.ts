import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class ExtraService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    signToken(data: any): Promise<string>;
    getUId(token: string): Promise<any>;
    getSId(token: string): Promise<any>;
    response(statusCode: number, message: string, content: any): {
        statusCode: number;
        message: string;
        content: any;
    };
}
export declare class AuthGuard implements CanActivate {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
