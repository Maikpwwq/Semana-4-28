const db = require('../models');

// Agregar una nueva Categoria
module.exports = {

    add : async (req, res, next) => {
        try {    
            const registro = await db.categoria.create(req.body);
            if (!registro) {
                res.status(404).send({ message: "Error al crear la categoria" });
            } else {
                res.status(200).json(registro);
            }
        } catch (error) {
            res.status(500).send({
                message: 'Error ->' + error
            })
            next(error)
        }  
    },

    // Listar las Categorias
    list : async (req, res, next) => {
        try {
            const registros = await db.categoria.findAll();
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
    },

    // Consultar un Categoria por Id
    query : async (req, res, next) => {
        try {
            const reg = await db.categoria.findOne({ 
                id: req.query.id 
            })
    
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    
    // Categoria
    queryCodigo : async(req, res, next) => {
        try {
            const reg = await db.categoria.findOne({ 
                codigo: req.query.codigo 
            })
    
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },            

    // Remover un categoria
    remove : async (req, res, next) => {
        try {
            const reg = await db.categoria.destroy({ 
                where: { id: req.body.id }
            });
            if (reg == 0) {
                res.status(404).send({ 
                    message: "La categoria no existe" 
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            }); 
            next(e)
        }
    },

    // Actualizar los Datos de una Categoria
    update : async (req, res, next) => {
        try {
            const registro = await db.categoria.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion, 
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
    },

    // Activar el registro de una Categoria
    activate : async (req, res, next) => {
        try {
            const registro = await db.categoria.update({
                estado:1
            },{
                where: { id: req.body.id }
            });
            res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Error ->' + error
            });
            next(error)
        }  
    },

    // Desactivar el registro de una Categoria
    deactivate : async (req, res, next) => {
        try {
            const registro = await db.categoria.update({
                estado:0
            },{
                where: { id: req.body.id }
            });
            res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Error ->' + error
            });
            next(error)
        }  
    },
}