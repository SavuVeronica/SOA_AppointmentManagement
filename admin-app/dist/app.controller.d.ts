import { HttpService } from "@nestjs/common";
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private httpService;
    constructor(appService: AppService, httpService: HttpService);
    getHello(): any;
}
