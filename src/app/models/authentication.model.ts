import { HttpOperationModel } from "./http-operation.model";
import { IPosyanduModel } from "./posyandu.model";

export interface IAuthenticationModel {
    email: string;
    password: string;
}

export class AuthenticationModel implements HttpOperationModel {
    status: boolean;
    data: {
        id: number
        name: string
        email: string
        email_verified_at: any
        no_hp: string
        password: string
        jenis_user: string
        id_posyandu: number
        remember_token: any
        created_at: string
        updated_at: string
        posyandu: IPosyanduModel
    };
    message?: string;
}