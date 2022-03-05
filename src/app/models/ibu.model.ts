import { HttpOperationModel } from './http-operation.model';

export interface IIbuModel {
    nik_ibu: string
    nama_ibu: string
    no_hp: string
    domisili: string
    rt: string
    rw: string
    id_posyandu: number
}

export interface ViewIbuModel {
    id: number
    nik_ibu: string
    nama_ibu: string
    no_hp: string
    domisili: string
    rt: string
    rw: string
    id_posyandu: string
    created_at: string
    updated_at: string
}

export class IbuModel implements HttpOperationModel {
    status: boolean;
    data: ViewIbuModel[];
}