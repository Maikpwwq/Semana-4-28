'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class venta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.articulo, {
        through: 'ventaArticulos',
        as: 'detalle-venta-articulos',
        foreignKey: 'ventaId',
        otherKey: 'articuloId'
      });
      this.belongsTo(models.usuario, { 
        foreignKey: 'usuarioId', 
        as: 'detalle-usuario' 
      }); 
      this.belongsTo(models.persona, { 
        foreignKey: 'personaId', 
        as: 'detalle-persona' 
      })           
    }
  };
  venta.init({
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
    modelName: 'venta',
  });
  return venta;
};