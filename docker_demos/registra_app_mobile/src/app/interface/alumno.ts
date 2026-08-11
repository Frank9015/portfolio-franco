export interface Alumno {
    id: number;
    usera: {
        id: number;
    };
    fecha_nacimiento: string; 
    foto_alumno: string; 
    curso: {
        id: number;
    };
    asistencias: number;
    Reprobado: boolean;
}
