const db = require('../models');

// Adicionar un nuevo Articulo
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.articulo.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Listar los Articulos
exports.list = async (req, res, next) => {
    try {
        const registros = await db.articulo.findAll({
            include: [{
                model: db.Categoria,
                as: 'detalle-categoria', // from model categoria
                required: true, // Registro innerJoin solo a un modelo asociado                
                // atributes: ["id", "nombre", "descripcion"]
            }],
        }); 
        if (registros) {
            res.status(200).json(registros);
        } else {
            res.status(404).send({
                message: 'No existen Articulos en el sistema'
            })
        }        
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error)
    }  
};

// Actualizar los Datos de un Articulo
exports.update = async (req, res, next) => {
    try {
        const registro = await db.articulo.update({        
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio_venta: req.body.precio_venta,
            stock: req.body.stock,
            // estado: req.body.estado,
            categoriaId: req.body.categoriaId
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

// Activar el registro de un Articulo
exports.activate = async (req, res, next) => {
    try {
        const registro = await db.articulo.update({estado:1},{
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

// Desactivar el registro de un Articulo
exports.deactivate = async (req, res, next) => {
    try {
        const registro = await db.articulo.update({estado:0},{
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