import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken: string = localStorage.getItem('access-token');
        const tokenType: string = localStorage.getItem('token-type');
        const client: string = localStorage.getItem('client');
        const expiry: string = localStorage.getItem('expiry');
        const uid: string = localStorage.getItem('uid');

        var authReq;
        if (accessToken) {
            authReq = request.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'access-token': accessToken,
                    'token-type': tokenType,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                })
            });
        } else {
            authReq = request.clone();
        }

        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                switch (error.status) {
                    // case 401:
                    //         this.router.navigate(['/401']);
                    //         break;
                    case 404:
                        this.router.navigate(['/404']);
                        break;
                    // case 500:
                    //         this.router.navigate(['/500']);
                    //         break;
                }
                return throwError(error);
            }));
    }
}
