import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Page } from '@nativescript/core';
import { IIbuModel, ViewIbuModel } from '~/app/models/ibu.model';
import { ApplicationSettingService } from '~/app/services/application-setting.service';
import { HttpOperationService } from '~/app/services/http-operation.service';
import { IbuService } from '~/app/services/ibu.service';

@Component({
    moduleId: module.id,
    selector: 'data-ibu',
    templateUrl: './data-ibu.component.html',
})

export class DataIbuComponent implements OnInit {

    FormInputIbu: FormGroup;

    DataIbu: ViewIbuModel[];

    showSpinner: boolean = false;

    constructor(
        private page: Page,
        private ibuService: IbuService,
        private formBuilder: FormBuilder,
        private applicationSettingService: ApplicationSettingService,
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        this.onSetFormInputIbuAttributes();

        this.onGetAllIbuByIdPosyandu(this.applicationSettingService.getAppSettings('posyanduId', 'Number'));
    }

    onGetAllIbuByIdPosyandu(id_posyandu: number): void {
        this.ibuService.onGetIbuByIdPosyandu(id_posyandu)
            .subscribe((result) => {
                this.DataIbu = result.data;
            });
    }

    onSetFormInputIbuAttributes(): void {
        this.FormInputIbu = this.formBuilder.group({
            nik_ibu: ["", []],
            nama_ibu: ["", []],
            no_hp: ["", []],
            domisili: ["", []],
            rt: ["0", []],
            rw: ["0", []],
            id_posyandu: [0, []]
        });
    }

    onSubmitFormInputDataIbu(FormInputIbu: IIbuModel): void {
        FormInputIbu.id_posyandu = this.applicationSettingService.getAppSettings('posyanduId', "Number");

        this.showSpinner = true;

        this.ibuService.onPostSaveIbu(FormInputIbu)
            .subscribe((result) => {
                this.showSpinner = false;
            }, (error) => {
                console.warn(error);
            }, () => {
                this.onResetFormInputDataIbu();
            });
    }

    onResetFormInputDataIbu(): void {
        this.FormInputIbu.reset();
        this.nik_ibu.setValue(0);
        this.nama_ibu.setValue("");
        this.no_hp.setValue("");
        this.domisili.setValue("");
        this.rt.setValue(0);
        this.rw.setValue(0);
    }

    get nik_ibu(): AbstractControl { return this.FormInputIbu.get('nik_ibu'); }
    get nama_ibu(): AbstractControl { return this.FormInputIbu.get('nama_ibu'); }
    get no_hp(): AbstractControl { return this.FormInputIbu.get('no_hp'); }
    get domisili(): AbstractControl { return this.FormInputIbu.get('domisili'); }
    get rt(): AbstractControl { return this.FormInputIbu.get('rt'); }
    get rw(): AbstractControl { return this.FormInputIbu.get('rw'); }
}