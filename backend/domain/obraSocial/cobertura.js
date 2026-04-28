import { Especialidad } from "../medicos/especialidad.js";
import { Practica } from "../medicos/practica.js";

export class CoberturaEspecialidad {
  constructor({ especialidad, nivel }) {
    this.especialidad = especialidad;
    this.nivel = nivel;
  }
}

export class CoberturaPractica {
  constructor({ practica, nivel }) {
    this.practica = practica;
    this.nivel = nivel;
  }
}