const db = require('../models');

// registrarIngreso
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

// listarIngresos
exports.listar = async (req, res, next) => {
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

// actualizarDatos de usuario como cambiarPassword
exports.update = async (req, res, next) => {
    try {
        const registro = await db.Ingresos.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
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

// administrarRoles res.status(404).send('User Not Found.');
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