'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categoria', [
            {
                nombre: 'Regeneración_Aguas',
                descripcion: 'Infraestructuras para Plantas de tratamiento de aguas residuales (PTAR),  de tratamiento de Residuos Industriales Líquidos (RILES) y  Estaciones depuradoras de aguas residuales (EDARS).',
                estado: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categoria', null, {});
    }
};