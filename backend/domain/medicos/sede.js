let idSedeGlobal = 0;

export class Sede {
  constructor({ nombre, direccion }) {
    this.id = idSedeGlobal++;
    this.nombre = nombre;
    this.direccion = direccion;
  }
}