import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EventData, Page, Switch } from '@nativescript/core';
import { SelectedIndexChangedEventData, ValueList } from 'nativescript-drop-down';
import { HitungStuntingModel, IHitungStuntingModel, ViewHitungStuntingModel } from '~/app/models/hitung-stunting.model';
import { ApplicationSettingService } from '~/app/services/application-setting.service';
import { BayiService } from '~/app/services/bayi.service';
import { HitungStuntingService } from '~/app/services/hitung-stunting.service';
import { UtilityService } from '~/app/services/utility.service';

@Component({
    moduleId: module.id,
    selector: 'ns-hitung-stunting',
    templateUrl: './hitung-stunting.component.html',
})

export class HitungStuntingComponent implements OnInit {

    DataJenisKelamin: ValueList<string>;

    DataJenisKelamin$: any[] = [
        { value: 'L', display: 'Laki - Laki' },
        { value: 'P', display: 'Perempuan' }
    ];

    FormHitungStunting: FormGroup;

    showSpinner: boolean = false;

    ResultHitungStunting: any[] = [];

    SelectedTabIndex: number = 0;

    constructor(
        private page: Page,
        private bayiService: BayiService,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private hitungStuntingService: HitungStuntingService,
        private applicationSettingService: ApplicationSettingService,
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        this.onSetFormHitungStuntingAttributes();

        this.DataJenisKelamin = new ValueList<string>(this.DataJenisKelamin$);
    }

    onSelectedIndexchanged(args: EventData): void {
        // console.log(this.SelectedTabIndex);
    }

    onSetFormHitungStuntingAttributes(): void {
        this.FormHitungStunting = this.formBuilder.group({
            tanggal_ukur: ["", []],
            cara_ukur: ["berdiri", []],
            jenis_pemeriksaan: ["", []],
            id_bayi: [0, []],
            berat_badan: [0, []],
            tinggi_badan: [0, []],
            lingkar_lengan: [0, []],
            lingkar_kepala: [0, []],
            umur_bulan: [0, []],
            jenis_kelamin: ["", []],
            asi: [0, []],
        });
    }

    onChangeDatepicker(args: any): void {
        const age = this.utilityService.onCalculateAge(args.value);

        this.umur_bulan.setValue(age);
    }

    onChangeDatepickerTglPemeriksaan(args: any): void {
        const tglPemeriksaan = this.utilityService.onFormatDate(args.value, "yyyy-MM-Do");

        this.tanggal_ukur.setValue(tglPemeriksaan);
    }

    onChangeJenisKelamin(args: SelectedIndexChangedEventData): void {
        let index = args.newIndex;

        let jk = index == 0 ? "L" : "P";

        this.jenis_kelamin.setValue(jk);
    }

    onChangeMasihAsi(args: EventData): void {
        const sw = args.object as Switch;
        const isChecked = sw.checked;

        let asi = isChecked ? 1 : 0;

        this.asi.setValue(asi);
    }

    onSubmitFormHitungStunting(FormHitungStunting: IHitungStuntingModel): void {
        FormHitungStunting.berat_badan = parseFloat(FormHitungStunting.berat_badan);
        FormHitungStunting.tinggi_badan = parseFloat(FormHitungStunting.tinggi_badan);
        FormHitungStunting.lingkar_lengan = parseFloat(FormHitungStunting.lingkar_lengan);
        FormHitungStunting.lingkar_kepala = parseFloat(FormHitungStunting.lingkar_kepala);
        FormHitungStunting.umur_bulan = parseFloat(FormHitungStunting.umur_bulan);

        this.showSpinner = true;

        this.hitungStuntingService.onPostSavePemeriksaan(FormHitungStunting)
            .subscribe((result) => {
                this.onHandlingHasilPemeriksaan(result);
            }, (error) => {
                console.warn(error);
            }, () => {
                // this.onResetFormHitungStunting();
            });
    }

    onHandlingHasilPemeriksaan(result: HitungStuntingModel): void {
        this.showSpinner = false;

        if (!result.status) {
            this.utilityService.onShowCustomToast(result.message);
        } else {
            const data = result.data;

            // ** BB / U
            const BB_U = data.status_gizi_BB_U;
            if (data.z_score_BB_U != null && BB_U.id != null) {
                BB_U['z_score'] = data.z_score_BB_U;
                this.ResultHitungStunting.push(BB_U);
            };

            // ** PB / U
            const PB_U = data.status_gizi_PB_U;
            if (data.z_score_PB_U != null && PB_U.id != null) {
                PB_U['z_score'] = data.z_score_PB_U;
                this.ResultHitungStunting.push(PB_U);
            };

            // ** TB / U
            const TB_U = data.status_gizi_TB_U;
            if (data.z_score_TB_U != null && TB_U.id != null) {
                TB_U['z_score'] = data.z_score_TB_U;
                this.ResultHitungStunting.push(TB_U);
            };

            // ** BB / TB
            const BB_TB = data.status_gizi_BB_TB;
            if (data.z_score_BB_TB != null && BB_TB.id != null) {
                BB_TB['z_score'] = data.z_score_BB_TB;
                this.ResultHitungStunting.push(BB_TB);
            };

            // ** BB / PB
            const BB_PB = data.status_gizi_BB_PB;
            if (data.z_score_BB_PB != null && BB_PB.id != null) {
                BB_PB['z_score'] = data.z_score_BB_PB;
                this.ResultHitungStunting.push(BB_PB);
            };

            setTimeout(() => {
                this.SelectedTabIndex = 1;
            }, 200);
        }
    }

    onResetFormHitungStunting(): void {
        this.FormHitungStunting.reset();
        this.tanggal_ukur.setValue(this.utilityService.onFormatDate(new Date(), 'yyyy-MM-Do'));
        this.cara_ukur.setValue("berdiri");
        this.jenis_pemeriksaan.setValue("");
        this.id_bayi.setValue(0);
        this.berat_badan.setValue(0);
        this.tinggi_badan.setValue(0);
        this.lingkar_lengan.setValue(0);
        this.lingkar_kepala.setValue(0);
        this.umur_bulan.setValue(0);
        this.jenis_kelamin.setValue("L");
        this.asi.setValue(0);
    }

    get tanggal_ukur(): AbstractControl { return this.FormHitungStunting.get('tanggal_ukur'); }
    get cara_ukur(): AbstractControl { return this.FormHitungStunting.get('cara_ukur'); }
    get jenis_pemeriksaan(): AbstractControl { return this.FormHitungStunting.get('jenis_pemeriksaan'); }
    get id_bayi(): AbstractControl { return this.FormHitungStunting.get('id_bayi'); }
    get berat_badan(): AbstractControl { return this.FormHitungStunting.get('berat_badan'); }
    get tinggi_badan(): AbstractControl { return this.FormHitungStunting.get('tinggi_badan'); }
    get lingkar_lengan(): AbstractControl { return this.FormHitungStunting.get('lingkar_lengan'); }
    get lingkar_kepala(): AbstractControl { return this.FormHitungStunting.get('lingkar_kepala'); }
    get umur_bulan(): AbstractControl { return this.FormHitungStunting.get('umur_bulan'); }
    get jenis_kelamin(): AbstractControl { return this.FormHitungStunting.get('jenis_kelamin'); }
    get asi(): AbstractControl { return this.FormHitungStunting.get('asi'); }
}