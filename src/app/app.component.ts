import { Component, OnInit } from '@angular/core'
import { registerElement } from '@nativescript/angular'
import { CardView } from '@nstudio/nativescript-cardview'
import { android } from '@nativescript/core/application';
import Theme from '@nativescript/theme';

registerElement('CardView', () => CardView);

@Component({
    selector: 'ns-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public ngOnInit(): void {
        if (android) {
            try {
                Theme.setMode(Theme.Light);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
