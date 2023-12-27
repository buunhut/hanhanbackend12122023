"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = exports.ExtraService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: './.env',
});
let ExtraService = class ExtraService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async signToken(data) {
        const result = this.jwtService.sign(data, {
            expiresIn: '365d',
            secret: process.env.JWT_SECRET_KEY
        });
        return result;
    }
    async getUId(token) {
        const result = await this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET_KEY
        });
        return result.uId;
    }
    async getSId(token) {
        const result = await this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET_KEY
        });
        return result.sId;
    }
    response(statusCode, message, content) {
        return {
            statusCode,
            message,
            content,
        };
    }
};
exports.ExtraService = ExtraService;
exports.ExtraService = ExtraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], ExtraService);
let AuthGuard = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const { token } = request.headers;
            const verify = this.jwtService.verify(token, {
                secret: process.env.JWT_SECRET_KEY
            });
            if (!verify) {
                throw new common_1.UnauthorizedException('token không hợp lệ');
            }
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('token không hợp lệ');
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthGuard);
//# sourceMappingURL=service.js.map