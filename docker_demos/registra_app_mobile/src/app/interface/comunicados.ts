export interface Comunicado {
    id: number;
    titulo: string;
    contenido: string;
    fecha_envio: string; // Puedes ajustar el tipo de fecha según tus necesidades
    tipo_comunicado: 'U' | 'G'; // Tipo de comunicado: 'U' para Urgente, 'G' para General
  }
  