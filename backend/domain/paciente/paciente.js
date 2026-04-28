import { IDGenerador } from "../../mock/mock.js";
import { Usuario } from "../usuario/usuario.js";
import { ObraSocial } from "../obraSocial/obraSocial.js";
import { Plan } from "../obraSocial/plan.js";

let idPacienteGlobal = 0;

export class Paciente {
  constructor({ usuario, dni, nombre, obraSocial, plan }) {
    this.id = ++idPacienteGlobal;
    this.usuario = usuario;
    this.dni = dni;
    this.nombre = nombre;
    this.obraSocial = obraSocial;
    this.plan = plan;
  }
}