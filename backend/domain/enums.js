export const DiaSemana = Object.freeze({
    DOMINGO: "DOMINGO",
    LUNES: "LUNES",
    MARTES: "MARTES",
    MIERCOLES: "MIERCOLES",
    JUEVES: "JUEVES",
    VIERNES: "VIERNES",
    SABADO: "SABADO",
    values: Object.freeze([
        "DOMINGO",
        "LUNES",
        "MARTES",
        "MIERCOLES",
        "JUEVES",
        "VIERNES",
        "SABADO"
    ]),
    fromIndex(index) {
        return this.values[index] || null;
    }
});
export const EstadoTurno = Object.freeze({
    DISPONIBLE: "DISPONIBLE",
    RESERVADO: "RESERVADO",
    CONFIRMADO: "CONFIRMADO",
    CANCELADO: "CANCELADO",
    REALIZADO: "REALIZADO",
});
export const NivelCobertura = Object.freeze({
    TOTAL: "TOTAL",
    PARCIAL: "PARCIAL",
    NO_CUBIERTA: "NO_CUBIERTA"
})
