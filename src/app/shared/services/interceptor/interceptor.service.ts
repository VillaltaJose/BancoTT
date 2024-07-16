import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const prefix = 'http://localhost:3002/bp';

		if (!req.headers.has('Content-Type')) {
			if (!req.headers.has('Auto-header')) {
				req = req.clone({
					headers: req.headers.set(
						'Content-Type',
						'application/json'
					),
				});
			}
		}

		let separator = '';
		if (req.url.charAt(0) != '/') separator = '/';

		let request = req.clone({
			url: `${prefix}${separator}${req.url}`,
		});

		return next.handle(request).pipe(
			shareReplay(),
			catchError((err: any) => {
				return throwError(err);
			})
		);
	}
}
