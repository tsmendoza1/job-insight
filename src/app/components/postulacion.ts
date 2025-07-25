export interface Postulacion {
  id: number;
  perfil: any;  // o una interfaz Perfil si la tienes
  oferta: any;  // o una interfaz OfertaLaboral si la tienes
  estado: string;
  fechaPostulacion: string;
}

export interface PostulacionCrearDTO {
  perfil: { id: number };
  oferta: { id: number };
  estado: 'EN_PROCESO' | 'ACEPTADA' | 'RECHAZADA';
  fechaPostulacion: string;  // Formato 'YYYY-MM-DD'
}
