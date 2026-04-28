import { EstadoTurno } from "..enums.js";
import { Usuario } from "../usuario/usuario.js";
import { Turno } from "./turno.js";

export class CambioEstadoTurno {
  constructor({ turno, usuario, estado, motivo }) {
    this.fechaHoraIngreso = new Date();
    this.estado = estado;
    this.turno = turno;
    this.usuario = usuario;
    this.motivo = motivo;
  }
}