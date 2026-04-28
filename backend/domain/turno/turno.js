import { Medico } from "../medico/medico.js";
import { Paciente } from "../paciente/paciente.js";
import { EstadoTurno } from "..enums.js";
import { Practica } from "../medico/practica.js";
import { Sede } from "../medico/sede.js";
import { CambioEstadoTurno } from "./cambioEstadoTurno.js";
import { Usuario } from "../usuario/usuario.js";
import { factoryNotificaciones } from "../notificaciones/notificaciones.js";

let idTurnoGlobal = 0;

export class Turno {
  constructor({ medico, fechaHora, sede, practica, especialidad }) {

    this.id = ++idTurnoGlobal;
    this.medico = medico;
    this.paciente = null;
    this.fechaHora = fechaHora;
    this.sede = sede;
    this.practica = practica;
    this.especialidad = especialidad
    this.estado = EstadoTurno.DISPONIBLE;
    this.historialEstados = [];
    this.costo = this.practica ? this.practica.costo : this.especialidad.costoConsulta

    this.historialEstados.push(new CambioEstadoTurno({
      estado: this.estado, turno: this, usuario: usuarioSistemaBatch, motivo: "Creación de turno"
    }))
}

  actualizarEstado(nuevoEstado, usuario, motivo) {
    this.estado = nuevoEstado;
    this.historialEstados.push(new CambioEstadoTurno({ estado: nuevoEstado, turno: this, usuario: usuario, motivo }));
    factoryNotificaciones.crearSegunEstadoTurno(this);
  }

  getUltimoUsuarioEstado() {
    if (this.historialEstados.length === 0) return null;
        return this.historialEstados[this.historialEstados.length - 1].usuario;
  }
  
  setPaciente(paciente) {
    this.paciente = paciente;
  }
}