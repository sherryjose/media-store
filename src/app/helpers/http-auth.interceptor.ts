import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                'x-rapidapi-key': '<PRIVATE_API_KEY>',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        });
        return next.handle(request);
    }
}