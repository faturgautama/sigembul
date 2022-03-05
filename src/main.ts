import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { android, on, launchEvent, ApplicationEventData } from '@nativescript/core/application';
import { AppModule } from './app/app.module';


// if (android) {
//     on(launchEvent, (args: ApplicationEventData) => {
//         androidx.appcompat.app.AppCompatDelegate.setDefaultNightMode(
//             androidx.appcompat.app.AppCompatDelegate.MODE_NIGHT_NO
//         )
//     })
// }

runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

