const db = require('../models');

module.exports = {

        // Adicionar un nuevo Articulo
        add : async (req, res, next) => {
            try {    
                const registro = await db.articulo.create(req.body);
                if (!registro) {
                    res.status(404).send({ message: "Error al crear el articulo" });
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

        // Listar los Articulos
        list : async (req, res, next) => {
            try {
                const registros = await db.articulo.findAll({
                    include: [{
                        model: db.categoria,
                        as: 'detalle-categoria', // from model categoria
                        required: true, // Registro innerJoin solo a un modelo asociado                
                        atributes: ["nombre", "descripcion"]
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
        },

        // Consultar un Articulo por Id
        query : async (req, res, next) => {
            try {
                const reg = await db.articulo.findOne({ 
                    id: req.query.id 
                }).populate('detalle-categoria', {nombre:1});
        
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
        
        // Articulo
        queryCodigo : async(req, res, next) => {
            try {
                const reg = await db.articulo.findOne({ 
                    codigo: req.query.codigo 
                }).populate('detalle-categoria', { nombre: 1 });
        
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

        // Remover un Articulo
        remove : async (req, res, next) => {
            try {
                const reg = await db.articulo.destroy({ 
                    where: { id: req.body.id } //findByIdAndDelete
                });
                if (reg == 0) {
                    res.status(404).send({ message: "El articulo no existe" });
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

        // Actualizar los Datos de un Articulo
        update : async (req, res, next) => {
            try {
                const registro = await db.articulo.update({        
                    codigo: req.body.codigo,
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,                    
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
        },

        // Activar el registro de un Articulo
        activate : async (req, res, next) => {
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
        },

        // Desactivar el registro de un Articulo
        deactivate : async (req, res, next) => {
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
        },
}