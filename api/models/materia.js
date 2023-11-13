'use strict';

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING
    },
    id_carrera: {
      type: DataTypes.INTEGER,
      references: {
        model: 'carrera',
        key: 'id'
      }
    },
    id_profesor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuario',
        key: 'dni'
      }
    }
  }, {freezeTableName: true});

  materia.associate = function (models){
    // Una materia pertenece a N carreras
    //materia.belongsToMany(models.carrera)
    /*materia.belongsTo(models.carrera, {
      foreignKey: {
        fieldName: 'id_carrera',
        require: true
      }
    })*/
    
    // Una materia es dictada por 1 profesor
    materia.belongsTo(models.usuario)

    // Una materia es inscripta por N estudiantes
    materia.belongsToMany(models.usuario, {through: 'inscripcion'})
    //materia.hasMany(models.usuario, {through: 'inscripcion'})
  }
  
  return materia;
};
