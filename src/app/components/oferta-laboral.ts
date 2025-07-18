// src/app/models/oferta-laboral.model.ts
export type TipoTrabajo = 'Remoto' | 'Presencial' | 'Mixto';

export interface OfertaLaboral {
  id?: number;
  nombreEmpresa: string;
  titulo: string;
  descripcion: string;
  requisitos: string[];
  requisitosExperiencia: string[];
  ubicacion: string;
  fechaPublicacion: string;
  salario: number;
  tipoTrabajo: TipoTrabajo;
  coincidencias?: any[];
}
