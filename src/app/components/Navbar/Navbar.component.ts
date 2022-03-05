import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationSettingService } from '~/app/services/application-setting.service';
import { AuthenticationService } from '~/app/services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'ns-navbar',
    templateUrl: './Navbar.component.html',
})

export class NavbarComponent implements OnInit, AfterViewInit {

    UserName: string;

    constructor(
        private authenticationService: AuthenticationService,
        private applicationSettingService: ApplicationSettingService,
    ) { }

    ngOnInit() { }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.UserName = this.applicationSettingService.getAppSettings('userName', "String");
        }, 100);
    }

    onSignOut(): void {
        this.authenticationService.onLogout();
    }
}