import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Page } from '@nativescript/core';
import { UtilityService } from '~/app/services/utility.service';
import { ApplicationSettingService } from "../../services/application-setting.service";
import { Utils } from '@nativescript/core';
import * as API_CONFIG from '../../api/index';

@Component({
    moduleId: module.id,
    selector: 'ns-report-pemeriksaan',
    templateUrl: './report-pemeriksaan.component.html',
})

export class ReportPemeriksaanComponent implements OnInit {

    API = API_CONFIG;

    FormUnduhReport: FormGroup;

    maxDate: Date = new Date();

    constructor(
        private page: Page,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private appSettingService: ApplicationSettingService
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        this.onSetFormUnduhReport();
    }

    onSetFormUnduhReport(): void {
        this.FormUnduhReport = this.formBuilder.group({
            tahun: [0, []],
            bulan: [0, []],
            id_posyandu: [this.appSettingService.getAppSettings('posyanduId', "Number")]
        });
    }

    onChangeDatepicker(args: any): void {
        const value = args.value;

        const month = this.utilityService.onFormatDate(value, 'MM');
        this.bulan.setValue(month);

        const year = this.utilityService.onFormatDate(value, 'yyyy');
        this.tahun.setValue(year);
    }

    onUnduhReportHasilPemeriksaan(FormUnduhReport: any): void {
        const url = `${this.API.GET_LAPORAN_HASIL_PEMERIKSAAN}${FormUnduhReport.tahun}/${FormUnduhReport.bulan}/${FormUnduhReport.id_posyandu}`;
        Utils.openUrl(url);
    }

    get tahun(): AbstractControl { return this.FormUnduhReport.get('tahun') }
    get bulan(): AbstractControl { return this.FormUnduhReport.get('bulan') }
}