const db = require('../models');

// Agregar un Ingreso al sistema
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.Ingresos.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Listar los Ingresos del sistema
exports.list = async (req, res, next) => {
    try {
        const registros = await db.Ingresos.findAll();
        if (registros) {
            res.status(200).json(registros);
        } else {
            res.status(404).send({
                message: 'No existen Ingresos en el sistema'
            })
        }        
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Actualizar los Datos de un Ingreso
exports.update = async (req, res, next) => {
    try {
        const registro = await db.Ingresos.update({
            usuarioId: req.body.usuarioId,
            personaId: req.body.personaId,
            tipo_comprobante: req.body.tipo_comprobante,
            serie_comprobante: req.body.serie_comprobante,
            num_comprobante: req.body.num_comprobante,
            impuesto: req.body.impuesto,
            total: req.body.total
            // estado: req.body.estado
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

// Activar el registro del Ingreso
exports.activate = async (req, res, next) => {
    try {
        const registro = await db.Ingresos.update({estado:1},{
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

// Desactivar el registro del Ingreso
exports.deactivate = async (req, res, next) => {
    try {
        const registro = await db.Ingresos.update({estado:0},{
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