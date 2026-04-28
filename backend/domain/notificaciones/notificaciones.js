import { EstadoTurno, DiaSemana } from "..enums.js";
import { Usuario } from "../usuario/usuario.js";

let idNotificacionGlobal = 0;

export class Notificacion {
    constructor({destinatario, remitente, mensaje}) {
        this.id = ++idNotificacionGlobal;
        this.destinatario = destinatario;
        this.remitente = remitente;
        this.mensaje = mensaje;
        this.fechaHoraCreacion = new Date();
        this.fechaHoraLeida = null;
        this.leida = false;
    }

    marcarComoLeida() {
        this.leida = true;
        this.fechaHoraLeida = new Date();
    }
}

export class FactoryNotificaciones {
    
    crearSegunEstadoTurno(turno) {
        let destinatario, remitente, mensaje, sujeto, accion;
        const dia = DiaSemana.fromIndex(turno.fechaHora.getDay());
        const horaConMinutos = turno.fechaHora.toLocaleTimeString();
        
        switch (turno.estado) {
            case EstadoTurno.RESERVADO:
                destinatario = turno.medico.usuario;
                remitente = turno.paciente.usuario;
                sujeto = "paciente " + turno.paciente.nombre;
                accion = "reservado";
                break;

            case EstadoTurno.CONFIRMADO:
                destinatario = turno.paciente.usuario;
                remitente = turno.medico.usuario;
                sujeto = "paciente " + turno.paciente.nombre;
                accion = "confirmado";
                break;

            case EstadoTurno.CANCELADO:
                remitente = turno.getUltimoUsuarioEstado();
                const tipoCancelacion = remitente.id === turno.paciente.usuario.id
                    ? 'CANCELADO_PACIENTE'
                    : 'CANCELADO_MEDICO';
                    
                accion = "cancelado";
                if (tipoCancelacion === 'CANCELADO_PACIENTE') {
                    sujeto  = "paciente " + turno.paciente.nombre;
                } else {
                    sujeto = "médico " + turno.medico.nombre;
                }

                destinatario = remitente.id === turno.paciente.usuario.id ? turno.medico.usuario : turno.paciente.usuario;
                break;

            default:
                return null;
        }

        mensaje = `El ${sujeto} ha ${accion} el turno para el ${dia} a las ${horaConMinutos}`;

        return new Notificacion({
            destinatario,
            remitente,
            mensaje
        });
    }
}

export const factoryNotificaciones = new FactoryNotificaciones();