import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';
import { ApplicationSettingService } from '~/app/services/application-setting.service';

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

    constructor(
        private page: Page,
        private router: Router,
        private appSettingService: ApplicationSettingService,
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";
    }

    ngAfterViewInit(): void {
        // setTimeout(() => {
        //     const isLoggedIn = this.appSettingService.getAppSettings('isLoggedIn', "Boolean");
        //     if (isLoggedIn) this.router.navigate(['/beranda'])
        // }, 100);
    }

    onNavigateToAuthentication(): void {
        this.router.navigate(['/authentication']);
    }

    onNavigateToHitungStunting(): void {
        this.router.navigate(['/hitung-stunting']);
    }
}