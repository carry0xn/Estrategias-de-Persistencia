'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {});

  materia.associate = (models) => {
    materia.hasMany(models.materia, {
      foreignKey: 'id_materia'
    })
  }
  
  return materia;
};
