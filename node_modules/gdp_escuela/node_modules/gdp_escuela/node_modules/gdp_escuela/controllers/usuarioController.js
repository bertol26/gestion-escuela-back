const usuarioDAL = require('../dal/usuarioDAL')
const jwt = require('jsonwebtoken');

async function loginUsuario(req, res) {
    const nombreUsuario = req.params.nombre_usuario;
    const password = req.params.password;
    try {
        const usuario = await usuarioDAL.loginUsuario(nombreUsuario, password);
        if (!usuario) {
            return res.status(404).json({ message: 'Acceso denegado'})
        }
        const token = jwt.sign({ id: usuario.id, username: usuario.nombre_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json(token)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error al obtener usuario');
    }
}

module.exports = {
    loginUsuario
};