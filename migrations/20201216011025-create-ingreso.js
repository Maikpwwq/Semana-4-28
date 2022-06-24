'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ingresos', {
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
          model: 'usuarios',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'SET NULL'
      },
      personaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Ingreso pertenece a persona 1:1
          model: 'personas',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'SET NULL'
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
    await queryInterface.dropTable('ingresos');
  }
};