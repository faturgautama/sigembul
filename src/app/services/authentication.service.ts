import { Injectable } from "@angular/core";
import { AuthenticationModel, IAuthenticationModel } from "../models/authentication.model";
import { HttpOperationService } from "./http-operation.service";
import { ApplicationSettingService } from "./application-setting.service";
import * as API_CONFIG from '../api/index';
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    API = API_CONFIG;

    constructor(
        private router: Router,
        private httpOperationService: HttpOperationService,
        private appSettingService: ApplicationSettingService,
    ) { }

    onLogin(body: IAuthenticationModel): void {
        this.httpOperationService.defaultPostRequest(this.API.LOGIN, body, 'Login Berhasil')
            .subscribe((result: AuthenticationModel) => {
                this.handlingAuth(result);
            });
    }

    onLogout(): void {
        this.router.navigate(['']);
        this.appSettingService.removeAppSettings('userId');
        this.appSettingService.removeAppSettings('userName');
        this.appSettingService.removeAppSettings('posyanduId');
        this.appSettingService.removeAppSettings('posyanduName');
        this.appSettingService.setAppSettings('isLoggedIn', "Boolean", false);
    }

    private handlingAuth(result: AuthenticationModel): void {
        this.appSettingService.clearAppSettings();

        this.appSettingService.setAppSettings('userId', "Number", result.data.id);
        this.appSettingService.setAppSettings('userName', "String", result.data.name);
        this.appSettingService.setAppSettings('posyanduId', "Number", result.data.id_posyandu);
        this.appSettingService.setAppSettings('posyanduName', "String", result.data.posyandu.nama_posyandu);
        this.appSettingService.setAppSettings('isLoggedIn', "Boolean", true);

        this.router.navigate(['/beranda']);
    }
}