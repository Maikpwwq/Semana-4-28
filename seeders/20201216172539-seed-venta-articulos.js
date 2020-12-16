'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VentaArticulos', [{
      ventaId: 1,
      articuloId: 1,
      articulo: "Articulo1",
      cantidad: 3,
      precio: 500000,
      descuento: 110000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VentaArticulos', null, {});
  }
};
