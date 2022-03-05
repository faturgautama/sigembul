import { HttpOperationModel } from './http-operation.model';

export interface IHitungStuntingModel {
    tanggal_ukur: string
    cara_ukur: string
    jenis_pemeriksaan: string
    id_bayi: number
    berat_badan: any
    tinggi_badan: any
    lingkar_lengan: any
    lingkar_kepala: any
    umur_bulan: any
    jenis_kelamin: string
    asi: number
}

export interface IStatusGiziModel {
    id: number
    jenis_pemeriksaan: string
    min: string
    max: string
    range: string
    status_gizi: string
    feedback: string
}

export interface IBayiModel {
    id: number
    id_ibu: number
    nik_bayi: any
    nama_bayi: string
    tanggal_lahir: string
    berat_lahir: string
    panjang_lahir: string
    jenis_kelamin: string
    berat_badan: string
    tinggi_badan: string
    cara_ukur: string
    lingkar_lengan: string
    lingkar_kepala: string
    asi: number
    kondisi: string
    terakhir_ukur: string
    created_at: string
    updated_at: string
}

export interface IStatusGiziModel {
    id: number;
    jenis_pemeriksaan: string;
    min: string;
    max: string;
    range: string;
    status_gizi: string;
    feedback: string;
}

export interface ViewHitungStuntingModel {
    tanggal_ukur: string
    cara_ukur: string
    jenis_pemeriksaan: string
    id_bayi: number
    berat_badan: number
    tinggi_badan: number
    lingkar_lengan: number
    lingkar_kepala: number
    umur_bulan: number
    jenis_kelamin: string
    asi: number
    z_score_BB_U: number
    z_score_PB_U: any
    z_score_TB_U: number
    z_score_BB_TB: number
    z_score_BB_PB: number
    id_status_gizi_BB_U: number
    id_status_gizi_PB_U: any
    id_status_gizi_TB_U: number
    id_status_gizi_BB_TB: number
    id_status_gizi_BB_PB: number
    status_gizi_PB_U: IStatusGiziModel
    status_gizi_BB_U: IStatusGiziModel
    status_gizi_TB_U: IStatusGiziModel
    status_gizi_BB_TB: IStatusGiziModel
    status_gizi_BB_PB: IStatusGiziModel
    bayi: IBayiModel
}

export class HitungStuntingModel implements HttpOperationModel {
    status: boolean;
    data: ViewHitungStuntingModel;
    message?: string;
}