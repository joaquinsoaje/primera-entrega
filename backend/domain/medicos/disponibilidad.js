let idDisponibilidadGlobal = 0;

export class Especialidad {
  constructor({ nombreEspecialidad, duracionTurnoEnMins, costoConsulta }) {
    this.id = idDisponibilidadGlobal++;
    this.nombreEspecialidad = nombreEspecialidad;
    this.duracionTurnoEnMins = duracionTurnoEnMins;
    this.costoConsulta = costoConsulta;
  }
}