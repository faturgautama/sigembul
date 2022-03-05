import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IbuModel, IIbuModel } from "../models/ibu.model";
import { HttpOperationService } from "./http-operation.service";
import * as API_CONFIG from '../api/index';

@Injectable({ providedIn: 'root' })
export class IbuService {

    API = API_CONFIG;

    constructor(
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllIbu(): Observable<IbuModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_IBU);
    }

    onGetIbuByIdPosyandu(id_posyandu: number): Observable<IbuModel> {
        return this.httpOperationService.defaultGetRequest(`${this.API.GET_IBU_BY_ID_POSYANDU}${id_posyandu}`);
    }

    onPostSaveIbu(body: IIbuModel): Observable<any> {
        return this.httpOperationService.defaultPostRequest(this.API.POST_SAVE_IBU, body);
    }
}