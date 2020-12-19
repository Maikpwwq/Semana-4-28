'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ingreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.articulo, {
        through: 'IngresoArticulos',
        as: 'detalles',
        foreignKey: 'ingresoId',
        otherKey: 'articuloId'
      });
      this.belongsTo(models.persona, { 
        foreignKey: 'personaId', 
        as: 'detalle-persona' 
      });
      this.belongsTo(models.usuario, {
        foreignKey: 'usuarioId',
        as: 'detalle-usuario'
      });
    }
  };
  ingreso.init({
    usuarioId: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER,
    tipo_comprobante: DataTypes.STRING,
    serie_comprobante: DataTypes.STRING,
    num_comprobante: DataTypes.STRING,
    impuesto: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ingreso',
  });
  return ingreso;
};