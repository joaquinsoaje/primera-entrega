import { Plan } from "./plan.js";

let idObraSocialGlobal = 0;

export class ObraSocial {
  constructor({ nombreObraSocial, planes = []}) {
    this.id = idObraSocialGlobal++;
    this.nombreObraSocial = nombreObraSocial;
    this.planes = planes;
  }
}