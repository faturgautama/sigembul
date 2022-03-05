import { HttpClientModule } from '@angular/common/http'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptCommonModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";

import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component';
import { HitungStuntingComponent } from './pages/hitung-stunting/hitung-stunting.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component'
import { BerandaComponent } from './pages/beranda/beranda.component';
import { DataBalitaComponent } from './pages/data-balita/data-balita.component';
import { HitungStuntingBerandaComponent } from './pages/hitung-stunting-beranda/hitung-stunting-beranda.component';
import { DataIbuComponent } from './pages/data-ibu/data-ibu.component';
import { EdukasiComponent } from './pages/edukasi/edukasi.component';
import { ReportPemeriksaanComponent } from './pages/report-pemeriksaan/report-pemeriksaan.component';

import { HeadingComponent } from './components/Heading/Heading.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        DropDownModule,
        NativeScriptDateTimePickerModule
    ],
    declarations: [
        AppComponent,
        HeadingComponent,
        NavbarComponent,
        LoginComponent,
        AuthenticationComponent,
        HitungStuntingComponent,
        BerandaComponent,
        DataBalitaComponent,
        HitungStuntingBerandaComponent,
        DataIbuComponent,
        EdukasiComponent,
        ReportPemeriksaanComponent
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
