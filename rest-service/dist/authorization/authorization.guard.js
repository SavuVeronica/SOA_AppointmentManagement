"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationGuard = void 0;
const common_1 = require("@nestjs/common");
const jwks_rsa_1 = require("jwks-rsa");
const util_1 = require("util");
const jwt = require("express-jwt");
let AuthorizationGuard = class AuthorizationGuard {
    async canActivate(context) {
        const req = context.getArgByIndex(0);
        const res = context.getArgByIndex(1);
        const checkJwt = util_1.promisify(jwt({
            secret: jwks_rsa_1.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: '',
            }),
            audience: '',
            issuer: '',
            algorithms: ['RS256']
        }));
        try {
            await checkJwt(req, res);
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
    }
};
AuthorizationGuard = __decorate([
    common_1.Injectable()
], AuthorizationGuard);
exports.AuthorizationGuard = AuthorizationGuard;
//# sourceMappingURL=authorization.guard.js.map