import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { IEdukasiModel } from '~/app/models/edukasi.model';
import { EdukasiService } from '../../services/edukasi.service';
import { Utils } from '@nativescript/core';

@Component({
    moduleId: module.id,
    selector: 'ns-edukasi',
    templateUrl: './edukasi.component.html',
})

export class EdukasiComponent implements OnInit {

    EdukasiDatasource: IEdukasiModel[] = [];

    constructor(
        private page: Page,
        private edukasiService: EdukasiService
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        this.onGetAllEdukasi();
    }

    onGetAllEdukasi(): void {
        this.edukasiService.onGetAllEdukasi()
            .subscribe((result) => {
                this.EdukasiDatasource = result.data;
            });
    }

    onClickEdukasi(edukasi: IEdukasiModel): void {
        const url = edukasi.path_pdf;

        Utils.openUrl(url);
    }
}