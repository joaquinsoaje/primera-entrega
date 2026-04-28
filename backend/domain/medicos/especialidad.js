let idEspecialidadGlobal = 0;

export class Especialidad {
  constructor({ nombreEspecialidad, duracionTurnoEnMins, costoConsulta }) {
    this.id = idEspecialidadGlobal++;
    this.nombreEspecialidad = nombreEspecialidad;
    this.duracionTurnoEnMins = duracionTurnoEnMins;
    this.costoConsulta = costoConsulta;
  }
}