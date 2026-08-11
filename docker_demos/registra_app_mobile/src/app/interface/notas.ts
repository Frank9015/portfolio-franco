export interface Notas {
    id: number;
    materia_info: {
        id: number;
        nombre: string;
        horario: string;
        sala: string;
    };
    parcial1: number;
    parcial2: number;
    parcial3: number;
    parcial4: number;
    examen_final: number;
    alumno: {
        id: number;
    };
}

