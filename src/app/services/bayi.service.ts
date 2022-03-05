import { Injectable } from "@angular/core";
import * as API_CONFIG from '../api/index';
import { HttpOperationService } from "./http-operation.service";
import { Router } from "@angular/router";
import { BayiModel, IBayiModel } from "../models/bayi.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BayiService {

    API = API_CONFIG;

    constructor(
        private router: Router,
        private httpOperationService: HttpOperationService,
    ) { }

    onGetBayiByIdPosyandu(id_posyandu: number): Observable<BayiModel> {
        return this.httpOperationService.defaultGetRequest(`${this.API.GET_BAYI_BY_ID_POSYANDU}${id_posyandu}`);
    }

    onPostSaveBayi(body: IBayiModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API.POST_SAVE_BAYI, body);
    }
}