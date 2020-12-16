const db = require('../models');
const bcrypt = require('bcryptjs');

// Servicios
const tokenServices = require('../services/token')

// iniciarSesion
exports.signin = async (req, res, next) => {
    try {
        
        const user = await db.Usuarios.findOne({ 
            where: { email: req.body.email }
        });

        if (user) {
            const passwordIsValid = bcrypt.compareSync( req.body.password, user.password );

            if (passwordIsValid) {
                const token = await tokenServices.encode( user );
                
                res.status(200).send({
                    auth: true,
                    accessToken: token
                });
            } else {
                res.status(401).send({
                    auth: false,
                    accessToken: null,
                    error: 'Contraseña invalida'
                });
            };

        } else {
            res.status(404).json({
                error: 'Error al buscar con estos datos de usuario y contraseña'
            });
        };

    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        // Evitar el bloqueo al dar permiso de continuar
        next(error)
    }
}; 

// registrarUsuario
exports.signup = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.Usuarios.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// listarUsuarios
exports.listar = async (req, res, next) => {
    try {
        const users = await db.Usuarios.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
    }  
};

// actualizarDatos de usuario como cambiarPassword
exports.actualizar = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.Usuario.update(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error -> Error al intentar actualizar los datos del usuario con esta informacion' + error
        })
    }  
};

// administrarRoles res.status(404).send('User Not Found.');
exports.administrar = async (req, res, next) => {
    try {
        const users = await db.Usuarios.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
    }  
};