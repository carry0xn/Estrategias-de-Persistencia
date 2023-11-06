module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('estudiante', [
        {
          id: '1',
          dni: '12345678',
          nombre: 'Lucía González',
          email: 'luciagonzalez@gmail.com',
          password: '123',
          picture: '--',
      },
      {
          id: '2',
          dni: '45765432',
          nombre: 'Juan Pérez',
          email: 'juanperez@gmail.com',
          password: '123',
          picture: '--',
      },
      {
          id: '3',
          dni: '55555555',
          nombre: 'Ana Martínez',
          email: 'anamartinez@gmail.com',
          password: '123',
          picture: '--',
      },
      {
          id: '4',
          dni: '11112222',
          nombre: 'Carlos Sánchez',
          email: 'carlossanchez@gmail.com',
          password: '123',
          picture: '--',
      },
      {
          id: '5',
          dni: '99990000',
          nombre: 'Laura Rodríguez',
          email: 'laurarodriguez@gmail.com',
          password: '123',
          picture: '--',
      }      
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('estudiante', null, {});
    },
  };