'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('venta', [{
      usuarioId: 1,
      personaId: 1,
      tipo_comprobante: 'Digital',
      serie_comprobante: 'OP',
      num_comprobante: '1',
      impuesto: 19,
      total: 200000,
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('venta', null, {});
  }
};
