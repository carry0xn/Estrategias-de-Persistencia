'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    id_profesor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'profesor', // 'fathers' refers to table name
        key: 'dni', // 'id' refers to column name in fathers table
      }
    }

  }, {});

  materia.associate = function (models){
    materia.belongsTo(models.carrera, {
      as: 'Carrera-Relacionada',
      foreignKey: 'id'
    })

    materia.belongsTo(models.profesor, {
      as: 'Profesor-ACargo',
      foreignKey: 'id_profesor'
    })
  }
  
  return materia;
};
