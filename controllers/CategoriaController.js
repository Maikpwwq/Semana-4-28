const db = require('../models');

// Agregar una nueva Categoria
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.Categorias.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Listar las Categorias
exports.list = async (req, res, next) => {
    try {
        const registros = await db.Categorias.findAll();
        if (registros) {
            res.status(200).json(registros);
        } else {
            res.status(404).send({
                message: 'No existen categorias registradas en el sistema'
            })
        }        
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Actualizar los Datos de una Categoria
exports.update = async (req, res, next) => {
    try {
        const registro = await db.Categorias.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
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

// Activar el registro de una Categoria
exports.activate = async (req, res, next) => {
    try {
        const registro = await db.Categorias.update({estado:1},{
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

// Desactivar el registro de una Categoria
exports.deactivate = async (req, res, next) => {
    try {
        const registro = await db.Categorias.update({estado:0},{
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