
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApplicationSettingService } from '../services/application-setting.service';

@Injectable({ providedIn: 'root' })
export class IsLoggedInGuard implements CanActivate {

    constructor(
        private router: Router,
        private appSettingService: ApplicationSettingService
    ) { }

    canActivate() {
        const isLoggedIn = this.appSettingService.getAppSettings('isLoggedIn', "Boolean");

        if (isLoggedIn) {
            this.router.navigate(['/beranda']);
            return false;
        } else {
            return true;
        }
    }
}