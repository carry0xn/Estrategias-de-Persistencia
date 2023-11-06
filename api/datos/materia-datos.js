module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('materia', [
          {
            id: '1',
            nombre: 'Programación de Objetos 1',
            descripcion: '--',
            id_carrera: '1',
            id_profesor: '5',
          },
          {
            id: '2',
            nombre: 'Introduccion a la Inteligencia Artificial',
            descripcion: '--',
            id_carrera: '6',
            id_profesor: '4',
          },
          {
            id: '3',
            nombre: 'Sistemas Distribuidos',
            descripcion: '--',
            id_carrera: '5',
            id_profesor: '3',
          },
          {
            id: '4',
            nombre: 'Quimica',
            descripcion: '--',
            id_carrera: '2',
            id_profesor: '2',
          },
          {
            id: '5',
            nombre: 'Taller de Marcado y Tecnologia Web',
            descripcion: '--',
            id_carrera: '1',
            id_profesor: '1',
          },
          {
            id: '6',
            nombre: 'Filosofia de la Educacion',
            descripcion: '--',
            id_carrera: '3',
            id_profesor: '5',
          }          
        ],
        {},
      );
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('materia', null, {});
    },
  };