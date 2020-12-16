'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ingresos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Ingreso pertenece a usuario 1:1
          model: 'Usuario',
          key: 'id'
        }
      },
      personaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Ingreso pertenece a persona 1:1
          model: 'Persona',
          key: 'id'
        }
      },
      tipo_comprobante: {
        type: Sequelize.STRING
      },
      serie_comprobante: {
        type: Sequelize.STRING
      },
      num_comprobante: {
        type: Sequelize.STRING
      },
      impuesto: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ingresos');
  }
};