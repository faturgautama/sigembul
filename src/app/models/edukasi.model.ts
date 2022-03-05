import { HttpOperationModel } from './http-operation.model';

export interface IEdukasiModel {
    id: number
    title: string
    description: string
    file_name: string
    color: string
    created_at: string
    updated_at: string
    path_pdf: string
}

export class EdukasiModel implements HttpOperationModel {
    status: boolean;
    data: IEdukasiModel[];
}