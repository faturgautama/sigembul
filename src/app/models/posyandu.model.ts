import { HttpOperationModel } from './http-operation.model';

export class PosyanduModel implements HttpOperationModel {
    status: boolean;
    data: IPosyanduModel[];
}

export interface IPosyanduModel {
    id: number
    nama_posyandu: string
    id_puskesmas: number
    id_kelurahan: number
    created_at: string
    updated_at: string
    puskesmas?: IPuskesmasModel
    kelurahan?: IKelurahanModel
}

export interface IPuskesmasModel {
    id: number
    nama_puskesmas: string
    id_kelurahan: any
    created_at: string
    updated_at: string
}

export interface IKelurahanModel {
    id: number
    nama_kelurahan: string
    created_at: string
    updated_at: string
}