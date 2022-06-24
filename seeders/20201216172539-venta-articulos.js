'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ventaArticulos', [{
      ventaId: 1,
      articuloId: 1,
      proyecto: 'Proyecto1',
      descripcion: 'Registre el objetivo del proyecto',
      precio: 500000,
      descuento: 110000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ventaArticulos', null, {});
  }
};
