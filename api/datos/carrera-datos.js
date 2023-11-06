module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('carrera', [
          {
            id: '1',
            nombre: 'Tecnicatura en Programacion',
            descripcion: '--',
            duracion: '2 Años y medio',
            titulo: 'Técnico/a Universitario/a en Programación',
          },
          {
            id: '2',
            nombre: 'Licenciatura en Biotecnologia',
            descripcion: '--',
            duracion: '5 Años',
            titulo: 'Licenciado/a en Gestión Ambiental',
          },
          {
            id: '3',
            nombre: 'Profesorado Universitario en Educación Física',
            descripcion: '--',
            duracion: '4 Años',
            titulo: 'Profesora/a Universitario/a de Educación Física',
          },
          {
            id: '4',
            nombre: 'Profesorado Universitario de Letras',
            descripcion: '--',
            duracion: '4 Años',
            titulo: 'Profesora/a Universitario/a de Letras',
          },
          {
            id: '5',
            nombre: 'Licenciatura en Informática',
            descripcion: '--',
            duracion: '5 Años',
            titulo: 'Licenciado/a en Informática',
          },
          {
            id: '6',
            nombre: 'Tecnicatura Universitaria en Inteligencia Artificial',
            descripcion: '--',
            duracion: '2 Años y medio',
            titulo: 'Técnico/a Universitario/a en Inteligencia Artificial',
          },
        ],
        {},
      );
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('carrera', null, {});
    },
  };