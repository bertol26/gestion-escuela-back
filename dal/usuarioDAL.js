const db = require('../config/db')
const Usuario = require('../models/usuario')

class UsuarioDAL {
    static async loginUsuario(usuario, password) {
        try {
            const result = await db.query('select * from usuarios where nombre_usuario = $1 and password =$2', [usuario, password]);

            if (result.rows.length === 0) return null;
            const row = result.rows[0];
            return new Usuario(
                row.id,
                row.nombre,
                row.apellido,
                row.email,
                row.password,
                row.rol_id,
                row.estado,
                row.created_at,
                row.updated_at,
                row.nombre_usuario
            )
        } catch (error) {
            console.error(error.message);
            throw new Error('Error al obtener usuario');
        }
    }
}

module.exports = UsuarioDAL