const db = require('../models');

// Adicionar una Venta
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.venta.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Listar las Ventas
exports.list = async (req, res, next) => {
    try {
        const registros = await db.venta.findAll();
        if (registros) {
            res.status(200).json(registros);
        } else {
            res.status(404).send({
                message: 'No existen Ventas en el sistema'
            })
        }        
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Actualizar datos de la venta
exports.update = async (req, res, next) => {
    try {
        const registro = await db.venta.update({
            usuarioId: req.body.usuarioId,
            personaId: req.body.personaId,
            tipo_comprobante: req.body.tipo_comprobante,
            serie_comprobante: req.body.serie_comprobante,
            num_comprobante: req.body.num_comprobante,
            impuesto: req.body.impuesto,
            total: req.body.total
            //estado: req.body.estado
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

// Activar el registro de la venta
exports.activate = async (req, res, next) => {
    try {
        const registro = await db.venta.update({estado:1},{
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

// Desactivar el registro de la venta
exports.deactivate = async (req, res, next) => {
    try {
        const registro = await db.venta.update({estado:0},{
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