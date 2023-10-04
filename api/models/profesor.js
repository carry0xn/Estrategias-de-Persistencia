'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});

  profesor.associate = function (models){
    profesor.hasMany(models.materia)
  }
  
  return profesor;
};
