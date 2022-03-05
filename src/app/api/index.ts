
const ENV = "https://sigembul-mbkm-udinus.com/public/api/";

const ENV_REPORT = "https://sigembul-mbkm-udinus.com/public/"

export const LOGIN = `${ENV}login`;

export const GET_ALL_POSYANDU = `${ENV}posyandu`;

export const GET_IBU_BY_ID_POSYANDU = `${ENV}getIbuByIdPosyandu/`;
export const GET_ALL_IBU = `${ENV}ibu`;
export const POST_SAVE_IBU = `${ENV}ibu`;

export const GET_BAYI_BY_ID_POSYANDU = `${ENV}getBayiByIdPosyandu/`;
export const POST_SAVE_BAYI = `${ENV}bayi`;

export const POST_SAVE_PEMERIKSAAN = `${ENV}pemeriksaan`;

export const GET_ALL_EDUKASI = `${ENV}edukasi`;

export const GET_LAPORAN_HASIL_PEMERIKSAAN = `${ENV_REPORT}download_report_excel/`