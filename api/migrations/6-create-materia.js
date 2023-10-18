'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materia', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      descripcion: {
        type: Sequelize.STRING
      },
      id_carrera: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carrera',
          key: 'id'
        }
      },
      id_profesor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'profesor',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('materia');
  }
};
