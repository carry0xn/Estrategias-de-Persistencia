'use strict';

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING
    }
  }, {freezeTableName: true});

  usuario.associate = function (models){
    //usuario.hasMany(models.materia)
  }
  
  return usuario;
};
