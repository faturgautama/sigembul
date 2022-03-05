import { Injectable } from '@angular/core';
import *  as appSettings from '@nativescript/core/application-settings';

@Injectable({ providedIn: 'root' })
export class ApplicationSettingService {

    constructor() { }

    setAppSettings(id: string, type: "Number" | "String" | "Boolean", data: any): void {
        if (type == "Number") {
            appSettings.setNumber(id, data);
        };

        if (type == "String") {
            appSettings.setString(id, data);
        };

        if (type == "Boolean") {
            appSettings.setBoolean(id, data);
        };
    }

    getAppSettings(id: string, type: "Number" | "String" | "Boolean"): any {
        let data: any;

        if (type == "Number") {
            data = appSettings.getNumber(id);
        };

        if (type == "String") {
            data = appSettings.getString(id);
        };

        if (type == "Boolean") {
            data = appSettings.getBoolean(id);
        };

        return data;
    }

    removeAppSettings(id: string): void {
        appSettings.remove(id);
    }

    clearAppSettings(): void {
        appSettings.clear();
    }
}