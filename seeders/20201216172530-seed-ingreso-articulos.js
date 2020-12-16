'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IngresoArticulos', [{
      ingresoId: 1,
      articuloId: 1,
      articulo: 'Articulo1',
      cantidad: 3,
      precio: 300000,
      descuento: 80000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IngresoArticulos', null, {});
  }
};
