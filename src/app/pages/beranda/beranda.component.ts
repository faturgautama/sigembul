import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page, Application, AndroidApplication, AndroidActivityBackPressedEventData } from '@nativescript/core';
import { exit } from 'nativescript-exit';
import { ApplicationSettingService } from '~/app/services/application-setting.service';

@Component({
    moduleId: module.id,
    selector: 'ns-beranda',
    templateUrl: './beranda.component.html',
})

export class BerandaComponent implements OnInit {

    PosyanduName: string = "";

    constructor(
        private page: Page,
        private router: Router,
        private applicationSettingService: ApplicationSettingService
    ) {
        if (Application.android) {
            Application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
                if (this.router.isActive('/beranda', false)) {
                    data.cancel = true;
                    exit();
                }
            });
        };
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        setTimeout(() => {
            this.PosyanduName = this.applicationSettingService.getAppSettings('posyanduName', "String");
        }, 100);
    }

    onNavigateToDataIbu(): void {
        this.router.navigate(['/data-ibu']);
    }

    onNavigateToDataBalita(): void {
        this.router.navigate(['/data-balita']);
    }

    onNavigateToHitungStunting(): void {
        this.router.navigate(['/hitung-stunting-beranda']);
    }

    onNavigateToMateriEdukasi(): void {
        this.router.navigate(['/edukasi']);
    }

    onNavigateToReportPemeriksaan(): void {
        this.router.navigate(['/report-pemeriksaan'])
    }
}