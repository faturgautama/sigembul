import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EventData, Page, Switch } from '@nativescript/core';
import { PosyanduService } from '../../services/posyandu.service';
import { IbuService } from '../../services/ibu.service';
import { BayiService } from '../../services/bayi.service';
import { UtilityService } from '../../services/utility.service';
import { ViewIbuModel } from '~/app/models/ibu.model';
import { IBayiModel, ViewBayiModel } from '~/app/models/bayi.model';
import { SelectedIndexChangedEventData, ValueList } from 'nativescript-drop-down';
import { ApplicationSettingService } from '~/app/services/application-setting.service';

@Component({
    moduleId: module.id,
    selector: 'ns-data-balita',
    templateUrl: './data-balita.component.html',
})
export class DataBalitaComponent implements OnInit {

    FormInputBalita: FormGroup;

    DataBalita: ViewBayiModel[];

    DataIbu: ValueList<string>;

    DataIbu$: ViewIbuModel[];

    DataJenisKelamin: ValueList<string>;

    StepperFormInputBalita: number = 1;

    showSpinner: boolean = false;

    constructor(
        private page: Page,
        private ibuService: IbuService,
        private bayiService: BayiService,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private posyanduService: PosyanduService,
        private applicationSettingService: ApplicationSettingService,
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        this.onGetAllBalitaByIdPosyandu(this.applicationSettingService.getAppSettings('posyanduId', 'Number'));

        this.onSetFormInputBalitaAttributes();

        this.onGetAllIbu(this.applicationSettingService.getAppSettings('posyanduId', 'Number'));
    }

    onGetAllBalitaByIdPosyandu(id_posyandu: number): void {
        this.bayiService.onGetBayiByIdPosyandu(id_posyandu)
            .subscribe((result) => {
                this.DataBalita = result.data;
            });
    }

    onSetFormInputBalitaAttributes(): void {
        this.FormInputBalita = this.formBuilder.group({
            id_ibu: [0, []],
            nik_bayi: ["", []],
            nama_bayi: ["", []],
            tanggal_lahir: [0, []],
            berat_lahir: [0, []],
            panjang_lahir: [0, []],
            jenis_kelamin: ["", []],
            asi: [0, []],
        });
    }

    onGetAllPosyandu(): void {
        this.posyanduService.onGetAllPosyandu();

        this.posyanduService.Posyandu$
            .subscribe((result) => {
                console.log(result);
            });
    }

    onGetAllIbu(id_posyandu: number): void {
        this.ibuService.onGetIbuByIdPosyandu(id_posyandu)
            .subscribe((result) => {
                let itemSource = [];

                result.data.forEach((item) => {
                    itemSource.push({
                        value: item.id, display: item.nama_ibu
                    });
                });

                this.DataIbu = new ValueList<string>(itemSource);

                this.DataIbu$ = result.data;

                let itemJenisKelaminSource = [
                    { value: 'L', display: 'Laki - Laki' },
                    { value: 'P', display: 'Perempuan' },
                ];

                this.DataJenisKelamin = new ValueList<string>(itemJenisKelaminSource);
            });
    }

    onChangeIbu(args: SelectedIndexChangedEventData): void {
        let index = args.newIndex;

        let selectedIbu = this.DataIbu$[index];

        this.id_ibu.setValue(selectedIbu.id);
    }

    onChangeJenisKelamin(args: SelectedIndexChangedEventData): void {
        let index = args.newIndex;

        let jk = index == 0 ? "L" : "P";

        this.jenis_kelamin.setValue(jk);
    }

    onChangeDatepicker(args: any): void {
        this.tanggal_lahir.setValue(args.value)
    }

    onChangeMasihAsi(args: EventData): void {
        const sw = args.object as Switch;
        const isChecked = sw.checked;

        let asi = isChecked ? 1 : 0;

        this.asi.setValue(asi);
    }

    onNextStepper(): void {
        this.StepperFormInputBalita = 2;
    }

    onBackStepper(): void {
        this.StepperFormInputBalita = 1;
    }

    onSubmitFormInputDataBalita(FormInputBalita: IBayiModel): void {
        FormInputBalita.tanggal_lahir = this.utilityService.onFormatDate(new Date(FormInputBalita.tanggal_lahir), "yyyy-MM-Do");
        FormInputBalita.berat_lahir = parseFloat(FormInputBalita.berat_lahir);
        FormInputBalita.panjang_lahir = parseFloat(FormInputBalita.panjang_lahir);

        this.showSpinner = true;

        this.bayiService.onPostSaveBayi(FormInputBalita)
            .subscribe((result) => {
                // console.log(result);
                this.showSpinner = false;
            }, (error) => {
                console.warn(error);
            }, () => {
                this.onResetFormInputDataBalita();
            });
    }

    onResetFormInputDataBalita(): void {
        this.FormInputBalita.reset();
        this.id_ibu.setValue(0);
        this.nik_bayi.setValue("");
        this.nama_bayi.setValue("");
        this.tanggal_lahir.setValue("");
        this.berat_lahir.setValue(0);
        this.panjang_lahir.setValue(0);
        this.jenis_kelamin.setValue("L");
        this.asi.setValue(0);
    }

    get id_ibu(): AbstractControl { return this.FormInputBalita.get('id_ibu'); }
    get nik_bayi(): AbstractControl { return this.FormInputBalita.get('nik_bayi'); }
    get nama_bayi(): AbstractControl { return this.FormInputBalita.get('nama_bayi'); }
    get tanggal_lahir(): AbstractControl { return this.FormInputBalita.get('tanggal_lahir'); }
    get berat_lahir(): AbstractControl { return this.FormInputBalita.get('berat_lahir'); }
    get panjang_lahir(): AbstractControl { return this.FormInputBalita.get('panjang_lahir'); }
    get jenis_kelamin(): AbstractControl { return this.FormInputBalita.get('jenis_kelamin'); }
    get asi(): AbstractControl { return this.FormInputBalita.get('asi'); }
}