'use strict';

module.exports = {
    
    up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profesor', [
        {
            id: '1',
            dni: '33698254',
            nombre: 'Pablo Marcelli',
            email: 'marcellipablo@gmail.com',
            password: '123',
            picture: '--',
        },
        {
            id: '2',
            dni: '34898254',
            nombre: 'Macarena Quiroga',
            email: 'macarena.quiroga@gmail.com',
            password: '123',
            picture: '--',
        },
        {
            id: '3',
            dni: '40698554',
            nombre: 'Javier Rio',
            email: 'javierrio@gmail.com',
            password: '123',
            picture: '--',
        },
        {
            id: '4',
            dni: '43658854',
            nombre: 'Mariano Rean',
            email: 'marianorean@gmail.com',
            password: '123',
            picture: '--',
        },
        {
            id: '5',
            dni: '39668254',
            nombre: 'Daniel Buaon',
            email: 'danielbuaon@gmail.com',
            password: '123',
            picture: '--',
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('profesor', null, {});
    },
  };