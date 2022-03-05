import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { LoginComponent } from './pages/login/login.component'
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HitungStuntingComponent } from './pages/hitung-stunting/hitung-stunting.component'
import { BerandaComponent } from './pages/beranda/beranda.component';
import { DataIbuComponent } from './pages/data-ibu/data-ibu.component';
import { DataBalitaComponent } from './pages/data-balita/data-balita.component';
import { HitungStuntingBerandaComponent } from './pages/hitung-stunting-beranda/hitung-stunting-beranda.component';
import { EdukasiComponent } from './pages/edukasi/edukasi.component';
import { ReportPemeriksaanComponent } from './pages/report-pemeriksaan/report-pemeriksaan.component';

import { AuthGuard } from './helper/auth.guard';
import { IsLoggedInGuard } from './helper/isLoggedIn.guard';

const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [IsLoggedInGuard] },
    { path: 'authentication', component: AuthenticationComponent, canActivate: [IsLoggedInGuard] },
    { path: 'hitung-stunting', component: HitungStuntingComponent },
    { path: 'beranda', component: BerandaComponent, canActivate: [AuthGuard] },
    { path: 'data-ibu', component: DataIbuComponent },
    { path: 'data-balita', component: DataBalitaComponent },
    { path: 'hitung-stunting-beranda', component: HitungStuntingBerandaComponent },
    { path: 'edukasi', component: EdukasiComponent },
    { path: 'report-pemeriksaan', component: ReportPemeriksaanComponent },
]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
