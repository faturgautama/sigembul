import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';
import { IAuthenticationModel } from 'src/app/models/authentication.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'ns-authentication',
    templateUrl: './authentication.component.html',
})

export class AuthenticationComponent implements OnInit {

    FormAuthentication: FormGroup;

    constructor(
        private page: Page,
        private router: Router,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.statusBarStyle = 'light';
        this.page.backgroundColor = "#ECECEC";

        this.onSetFormAuthenticationAttributes();
    }

    onSetFormAuthenticationAttributes(): void {
        this.FormAuthentication = this.formBuilder.group({
            "email": ["", []],
            "password": ["", []]
        });
    }

    onSubmitFormAuthentication(FormAuthentication: IAuthenticationModel): void {
        this.authenticationService.onLogin(FormAuthentication);
    }

    get email(): AbstractControl { return this.FormAuthentication.get("email"); }
    get password(): AbstractControl { return this.FormAuthentication.get("password"); }
}