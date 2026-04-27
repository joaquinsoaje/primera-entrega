let idMedicoGlobal = 0;

export class Medico {
    constructor({usuario, matricula, nombre, especialidades = [], practicas = [], sedes = [], disponibilidades = []}) {
        this.idMedico = idMedicoGlobal++;
        this.usuario = usuario;
        this.matricula = matricula;
        this.nombre = nombre;
        this.especialidades = especialidades;
        this.practicas = practicas;
        this.sedes = sedes;
        this.disponibilidades = disponibilidades;
    }

    definirDisponibilidad(disponibilidad) {
        this.disponibilidades.push(disponibilidad);
    }
}