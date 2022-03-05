import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class HttpOperationService {


    constructor(
        private httpClient: HttpClient,
        private utilityService: UtilityService,
    ) { }

    defaultGetRequest(url: string): Observable<any> {
        return this.httpClient.get(url);
    }

    defaultPostRequest(url: string, body: any, message?: string): Observable<any> {
        return this.httpClient.post(url, body)
            .pipe(
                map((result) => {
                    if (result['status']) {
                        this.utilityService.onShowCustomToast(message);
                        return result;
                    } else {
                        this.handlingError(result);
                    }
                })
            )
    }

    private handlingError(result: any): void {
        this.utilityService.onShowCustomToast(result.message);
        return;
    }
}