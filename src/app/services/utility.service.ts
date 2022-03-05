import { Injectable } from "@angular/core";
import * as moment from 'moment';
import { Toasty, ToastPosition, ToastDuration } from '@triniwiz/nativescript-toasty';

@Injectable({ providedIn: 'root' })
export class UtilityService {

    Toast = new Toasty({
        text: 'Data Berhasil Disimpan',
        position: ToastPosition.TOP,
        duration: ToastDuration.LONG,
        backgroundColor: '#2f80ed',
        textColor: '#000000',
        yAxisOffset: 100,
        xAxisOffset: 10,
    });


    constructor() { }

    onFormatDate(date: Date, format?: string): any {
        moment.locale('id');

        let dateNow = format ? moment(date).format(format) : moment(date).format();

        return dateNow;
    }

    onCalculateAge(birthDate: Date): any {
        moment.locale('id');

        const age = moment().diff(birthDate, 'month');

        return age;
    }

    onShowCustomToast(message: string): void {
        this.Toast = new Toasty({
            text: message,
            position: ToastPosition.TOP,
            duration: ToastDuration.SHORT,
            backgroundColor: '#2f80ed',
            textColor: '#000000',
            yAxisOffset: 100,
            xAxisOffset: 10,
        });

        this.Toast.show();
    }
}