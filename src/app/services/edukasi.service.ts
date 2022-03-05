import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as API_CONFIG from '../api/index';
import { EdukasiModel } from "../models/edukasi.model";
import { HttpOperationService } from "./http-operation.service";

@Injectable({ providedIn: 'root' })
export class EdukasiService {

    API = API_CONFIG;

    constructor(
        private httpOperationService: HttpOperationService
    ) { }

    onGetAllEdukasi(): Observable<EdukasiModel> {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_EDUKASI);
    }
}