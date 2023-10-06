'use strict';

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER,
    id_profesor: {
      type: DataTypes.INTEGER,
      references: {
        key: 'dni'
      }
    }

  }, {});

  materia.associate = function (models){
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
