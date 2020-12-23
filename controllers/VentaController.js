const db = require('../models');

module.exports = {

            // Adicionar una Venta
            add : async (req, res, next) => {
                try {    
                    const registro = await db.venta.create(req.body);
                    if (!registro) {
                        res.status(404).send({ message: "Error al crear la venta" });
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

            // Listar las Ventas
            list : async (req, res, next) => {
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
            },

            // Consultar un venta por Id
            query : async (req, res, next) => {
                try {
                    const reg = await db.venta.findOne({ 
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

            // venta
            queryCodigo : async(req, res, next) => {
                try {
                    const reg = await db.venta.findOne({ 
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

            // Remover un venta
            remove : async (req, res, next) => {
                try {
                    const reg = await db.venta.destroy({ 
                        where: { id: req.body.id }
                    });
                    if (reg == 0) {
                        res.status(404).send({ 
                            message: "La venta no existe" 
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

            // Actualizar datos de la venta
            update : async (req, res, next) => {
                try {
                    const registro = await db.venta.update({
                        usuarioId: req.body.usuarioId,
                        personaId: req.body.personaId,
                        tipo_comprobante: req.body.tipo_comprobante,
                        serie_comprobante: req.body.serie_comprobante,
                        num_comprobante: req.body.num_comprobante,
                        impuesto: req.body.impuesto,
                        total: req.body.total
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

            // Activar el registro de la venta
            activate : async (req, res, next) => {
                try {
                    const registro = await db.venta.update({
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

            // Desactivar el registro de la venta
            deactivate : async (req, res, next) => {
                try {
                    const registro = await db.venta.update({
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