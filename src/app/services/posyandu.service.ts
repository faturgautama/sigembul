import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PosyanduModel } from "../models/posyandu.model";
import { HttpOperationService } from "./http-operation.service";
import * as API_CONFIG from '../api/index';

@Injectable({ providedIn: 'root' })
export class PosyanduService {

    API = API_CONFIG;

    Posyandu$: BehaviorSubject<PosyanduModel[]> = new BehaviorSubject<PosyanduModel[]>([]);

    constructor(
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllPosyandu(): void {
        this.httpOperationService.defaultGetRequest(this.API.GET_ALL_POSYANDU)
            .subscribe((result) => {
                this.Posyandu$.next(result);
            });
    }
}