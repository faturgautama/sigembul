import { HttpOperationModel } from './http-operation.model';

export interface IBayiModel {
    id_ibu: number
    nik_bayi: string
    nama_bayi: string
    tanggal_lahir: string
    berat_lahir: any
    panjang_lahir: any
    jenis_kelamin: string
    asi: number
}

export interface ViewBayiModel {
    id: number
    id_ibu: number
    nik_bayi: any
    nama_bayi: string
    tanggal_lahir: string
    berat_lahir: string
    panjang_lahir: string
    jenis_kelamin: string
    berat_badan: any
    tinggi_badan: any
    cara_ukur: any
    lingkar_lengan: any
    lingkar_kepala: any
    asi: number
    kondisi: any
    terakhir_ukur: any
    created_at: string
    updated_at: string
    nik_ibu: string
    nama_ibu: string
    domisili: string
    rt: string
    rw: string
}

export class BayiModel implements HttpOperationModel {
    status: boolean;
    data: ViewBayiModel[];
}