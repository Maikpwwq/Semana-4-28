const db = require('../models');

// Agregar una Persona
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.Personas.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Listar las Personas
exports.listar = async (req, res, next) => {
    try {
        const registros = await db.Personas.findAll();
        if (registros) {
            res.status(200).json(registros);
        } else {
            res.status(404).send({
                message: 'No existen Personas en el sistema'
            })
        }        
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Actualizar los datos de la Persona
exports.update = async (req, res, next) => {
    try {
        const registro = await db.Personas.update({
            tipo_persona: req.body.tipo_persona,
            nombre: req.body.nombre,
            tipo_documento: req.body.tipo_documento,
            num_documento: req.body.num_documento,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email
            // estado: req.body.
        }, { 
            where: { id: req.body.id }
        });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Activar el registro de la Persona
exports.activate = async (req, res, next) => {
    try {
        const registro = await db.Personas.update({estado:1},{
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

// Desactivar el registro de la Persona
exports.deactivate = async (req, res, next) => {
    try {
        const registro = await db.Personas.update({estado:0},{
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