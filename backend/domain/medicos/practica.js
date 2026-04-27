let idPracticaGlobal = 0;
export class Practica {
  constructor({ codigo, nombrePractica, duracionTurnoEnMins, costo }) {
    this.id = idPracticaGlobal++;
    this.codigo = codigo;
    this.nombrePractica = nombrePractica;
    this.duracionTurnoEnMins = duracionTurnoEnMins;
    this.costo = costo;
  }
}