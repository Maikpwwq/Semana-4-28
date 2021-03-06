const jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../secret/config.js');
 
const checkToken = async ( token ) => {
    let localID = null;
    
    try {
        const { _id } = await decode(token);
        localID = _id;
    } catch ( error ) {
        return false;
    };

    const user = await models.usuario.findOne({
        where: { id: localID, estado: 1 }
    }); 
    
    if ( user ) {
        const token = await encode(user.id, user.rol);
        return {
            token, 
            rol: user.rol
        }
    } else {
        return false
    }
};

module.exports = {
    //generar el token
    encode: async (id, rol) => {
        const token = jwt.sign({
            id: id,
            rol: rol        
        }, config.secret , {
            // Expira en 24 horas
            expiresIn: 86400,
        });
        return token
    },
    //permite decodificar el token
    decode: async(token) => {
        // si el token esta vencido genere uno nuevo, caso contrario retornar falso
        try {
            //const {id, name, email, rol, estado}
            const { id } = await jwt.verify(token, config.secret); 
            const user = await models.usuario.findOne({
                where: { id: id, estado: 1}
            });
            if (user) {
                return user
            } else {
                return false
            }
        } catch (error) {
            const newToken = await checkToken(token);
            return newToken
        };
    },
};