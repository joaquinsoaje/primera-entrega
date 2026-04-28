import { NivelCobertura } from "../enums.js";
import { CoberturaEspecialidad, CoberturaPractica } from "./cobertura.js";

let idPlanGlobal = 0;

export class Plan {
  constructor({nombrePlan, coberturasEspecialidad = [], coberturasPractica = [] }) {

    this.id = ++idPlanGlobal;
    this.nombrePlan = nombrePlan;
    this.coberturasEspecialidad = coberturasEspecialidad;
    this.coberturasPractica = coberturasPractica;
  }
  
  obtenerCoberturaEspecialidad(especialidad){
    return this.coberturasEspecialidad.find(cobertura => cobertura.especialidad.id === especialidad.id)?.nivel ?? NivelCobertura.SIN_COBERTURA;
  }
  
  obtenerCoberturaPractica(practica){
    return this.coberturasPractica.find(cobertura => cobertura.practica.id === practica.id)?.nivel ?? NivelCobertura.SIN_COBERTURA;
  }
}