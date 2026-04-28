let idUsuarioGlobal = 0;

export class Usuario {
  constructor({ nombreUsuario, password }) {
    this.id = ++idUsuarioGlobal;
    this.nombreUsuario = nombreUsuario;
    this.password = password;
  }
}