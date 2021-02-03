'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IngresoArticulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ingreso, { 
        foreignKey: 'ingresoId', 
        as: 'detalle-ingreso' 
      });
      this.belongsTo(models.articulo, { 
        foreignKey: 'articuloId', 
        as: 'detalle-articulo' 
      })
    }
  };
  IngresoArticulos.init({
    ingresoId: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER,
    proyecto: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IngresoArticulos',
  });
  return IngresoArticulos;
};