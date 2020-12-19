const db = require('../models');
const bcrypt = require('bcryptjs');

// Servicios
const tokenServices = require('../services/token')

// Inicio de Sesion de usuario
exports.signin = async (req, res, next) => {
    try {
        
        const user = await db.usuario.findOne({ 
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

// Registro de Usuario
exports.signup = async (req, res, next) => {
    try {
        const user = await db.usuario.findOne({ 
            where: { email: req.body.email }
        });
        if (user) {
            res.status(409).send({
                message: 'error, la solicitud entra en conflicto con la base de datos',
            })
        } else {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await db.usuario.create(req.body);
            res.status(200).json(user);        
        }
    } catch ( error ) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// Listar los Usuarios
exports.list = async (req, res, next) => {
    try {
        const users = await db.usuario.findAll();
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).send({
                message: 'No existen Ventas en el sistema'
            })
        }    
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// Adicionar un Usuario
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.usuario.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Actualizar los datos del Usuario
exports.update = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.usuario.update({            
            rol: req.body.rol,
            nombre: req.body.nombre,
            password: req.body.password,
            email: req.body.email,
            tipo_documento: req.body.tipo_documento,
            num_documento: req.body.num_documento,
            direccion: req.body.direccion,
            telefono: req.body.telefono
            //estado: req.body.estado
        }, { 
            where: { id: req.body.id }
        });
        res.status(200).json(user);

    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Activar el registro del Usuario
exports.activate = async (req, res, next) => {
    try {
        const registro = await db.usuario.update({estado:1},{
            where: { id: req.body.id }
        });
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// Desactivar el registro del Usuario
exports.deactivate = async (req, res, next) => {
    try {
        const registro = await db.usuario.update({estado:0},{
            where: { id: req.body.id }
        });
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};