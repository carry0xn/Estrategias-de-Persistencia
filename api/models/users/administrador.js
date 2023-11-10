'use strict';

module.exports = (sequelize, DataTypes) => {
  const administrador = sequelize.define('administrador', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        key: 'dni'
      }
    }
  }, {freezeTableName: true});

  administrador.associate = function (models){
    // Un administrador es un usuario
    administrador.hasOne(models.usuario)
  }
  
  return administrador;
};
