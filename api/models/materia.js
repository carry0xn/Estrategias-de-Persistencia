'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    id: DataTypes.INTEGER
  }, {});

  materia.associate = (models) => {
    materia.belongsTo(models.carrera, {
      as: 'Carrera-Relacionada',
      foreignKey: 'id_carrera'
    })

    materia.belongsTo(models.profesor, {
      as: 'Profesor-ACargo',
      foreignKey: 'id_profesor'
    })
  }
  
  return materia;
};
