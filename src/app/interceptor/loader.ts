import { HttpHandler,HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderService } from '../service/loader.service';
import {  finalize    } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    constructor(public loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
            this.loaderService.show();
            return next.handle(req).pipe(
                finalize(() => this.loaderService.hide())
            )
    }

}