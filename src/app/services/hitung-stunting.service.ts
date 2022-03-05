import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as API_CONFIG from '../api/index';
import { HitungStuntingModel, IHitungStuntingModel } from "../models/hitung-stunting.model";
import { HttpOperationService } from "./http-operation.service";

@Injectable({ providedIn: 'root' })
export class HitungStuntingService {

    API = API_CONFIG;

    constructor(
        private httpOperationService: HttpOperationService,
    ) { }

    onPostSavePemeriksaan(body: IHitungStuntingModel): Observable<HitungStuntingModel> {
        return this.httpOperationService.defaultPostRequest(this.API.POST_SAVE_PEMERIKSAAN, body, 'Pemeriksaan Berhasil');
    }
}