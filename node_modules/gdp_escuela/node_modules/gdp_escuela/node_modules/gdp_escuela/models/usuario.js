class Usuario {
    constructor(id, nombre, apellido, email, password, rol_id, estado, created_at, updated_at, nombre_usuario) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.rol_id = rol_id;
        this.estado = estado;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.nombre_usuario = nombre_usuario;
    }
}

module.exports = Usuario;