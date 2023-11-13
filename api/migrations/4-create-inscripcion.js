'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('inscripcion', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      comision: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duracion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_materia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'materia',
          key: 'id'
        }
      },
      id_estudiante: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'dni'
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
    return queryInterface.dropTable('inscripcion');
  }
};
