import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthorizationGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
