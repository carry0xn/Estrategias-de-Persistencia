const chai = require('chai');
//brinda una interfaz de prueba BDD/TDD para escribir pruebas expresivas
const expect = chai.expect;
//estilos  de chai, realiza aserciones sobre los resultados esperados
const request = require('supertest');
//hace solicitudes HTTP a la API y realizar aserciones sobre las respuestas

const app = require('../app.js');
// Archivo de entrada de la API
const models = require('../models');

describe('Test de Carreras', () => {
  before(() => {
    console.log(''); // Salto de línea
  });
  describe('GETALL /carrera', () => {
    it('Debería devolver un array con todas las carreras', async () => {
      // Crea un stub del controlador de carreras
      const findAndCountAllStub = sinon.stub(models.carrera, 'findAndCountAll');
      const nombresEsperados = [
        'Tecnicatura en Programacion',
        'Licenciatura en Gestión Ambiental',
        'Profesorado Universitario en Educación Física',
        'Profesorado Universitario de Letras',
        'Licenciatura en Informática',
        'Tecnicatura Universitaria en Inteligencia Artificial'
      ];
      // Configura el stub para devolver el mock de la respuesta esperada
      findAndCountAllStub.resolves({
        rows: [
          { id: 1, nombre: 'Tecnicatura en Programacion' },
          { id: 2, nombre: 'Licenciatura en Gestión Ambiental' },
          { id: 3, nombre: 'Profesorado Universitario en Educación Física' },
          { id: 3, nombre: 'Profesorado Universitario de Letras' },
          { id: 3, nombre: 'Licenciatura en Informática' },
          { id: 3, nombre: 'Tecnicatura Universitaria en Inteligencia Artificial' },
        ],
        count: 6,
      });

        // Verificar que la respuesta tenga el código 200
        expect(res.status).to.equal(200);
        // Verifica si la respuesta es un objeto
        expect(res.body).to.be.an('object');
        // Verifica si 'carreras' es un array
        expect(res.body).to.be.an('array');
        // Verificar propiedades para cada carreras en el array
        res.body.forEach((carrera, index) => {
            // Verifica si la carrera es un objeto
            expect(carrera).to.be.an('object');
            // Verifica si la carrera tiene la propiedad 'id'
            expect(carrera).to.have.property('id');
            // Verifica si la carrera tiene la propiedad 'nombre'
            expect(carrera).to.have.property('nombre');
            // Verifica si la carrera tiene la propiedad 'descripcion'
            expect(carrera).to.have.property('descripcion');
            // Verifica si  la propiedad 'nombre' de carrera es la de los mocks
            expect(carrera.nombre).to.equal(nombresEsperados[index]);
        });
    

      // Restaura el comportamiento original del controlador de carreras
      findAndCountAllStub.restore();
    });
  });

  describe('POST /carrera', () => {
    it('Debería crear una nueva carrera', async () => {
      // Crea un stub del modelo carrera
      const carreraStub = sinon.stub(models.carrera, 'create').resolves({
        id: 1,
        nombre: 'Licenciatura en Manipulación de alimentos',
      });

      // Realiza la solicitud de creación de la carrera y realiza las aserciones
      const res = await request(app).post('/carrera').send({
        id: 1,
        nombre: 'Licenciatura en Manipulación de alimentos',
      });

      // Verificar que la respuesta tenga el código 201
      expect(res.status).to.equal(201);
      // Verifica si la respuesta es un objeto
      expect(res.body).to.be.an('object');
      // Verificar si la respuesta contiene la propiedad 'carrera'
      expect(res.body).to.have.property('carrera');
      // Verificar si el objeto 'carrera' coincide con el valor esperado
      expect(res.body.carrera).to.deep.equal({
        id: 1,
        nombre: 'Licenciatura en Manipulación de alimentos',
      });

      // Restaura el comportamiento original del modelo carrera
      carreraStub.restore();
    });
  });

  describe('GET /carrera/:id', () => {
    it('Debería obtener una carrera por su ID', async () => {
      // Crea un stub del método findOne del modelo Carrera
      const findOneStub = sinon.stub(models.carrera, 'findOne').resolves({
        id: 7,
        nombre: 'Licenciatura en Biotecnología',
        descripcion: '--',
        duracion: '5 años',
        titulo: 'Licenciado/a en Biotecnología',
      });

      // Realiza la solicitud de obtención de la carrera y realiza las aserciones
      const res = await request(app).get('/carrera/1');

      // Verificar que la respuesta tenga el código 200
      expect(res.status).to.equal(200);
      // Verificar si la respuesta es un objeto
      expect(res.body).to.be.an('object');
      // Verificar si el objeto coincide con el valor esperado
      expect(res.body).to.deep.equal({
        id: 7,
        nombre: 'Licenciatura en Biotecnología',
        descripcion: '--',
        duracion: '5 años',
        titulo: 'Licenciado/a en Biotecnología',
      });

      // Restaurar el comportamiento original del modelo Carrera
      findOneStub.restore();
    });
  });

  describe('PUT /carrera/:id', () => {
    it('Debería actualizar una carrera', async () => {
      // Crea un stub del método update del modelo Carrera
      const updateStub = sinon.stub(models.carrera, 'update').resolves([1]);

      // Crea un mock del método findOne que devuelve un carrera existente
      const findOneMock = sinon.stub(models.carrera, 'findOne').resolves({
        id: 7,
        nombre: 'Licenciatura en Biotecnología',
        descripcion: '--',
        duracion: '5 años',
        titulo: 'Licenciado/a en Biotecnología',
        update: updateStub, // Añade el stub de update al objeto Carrera
      });

      // Realiza la solicitud de actualización de la carrera y realiza las aserciones
      const res = await request(app).put('/carrera/1').send({
        id: 7,
        nombre: 'Licenciatura en Biotecnología',
        descripcion: '--',
        duracion: '5 años',
        titulo: 'Licenciado/a en Biotecnología',
      });

      // Verificar que la respuesta tenga el código 200
      expect(res.status).to.equal(200);

      // Restaurar el comportamiento original del modelo Carrera
      updateStub.restore();
      findOneMock.restore();
    });
  });

  describe('DELETE /carrera/:id', () => {
    it('Debería eliminar una carrera', async () => {
      // Crea un stub del modelo carrera
      const destroyStub = sinon.stub(models.carrera, 'destroy').resolves(7);

      // Crea un mock del método findOne que devuelve una carrera existente
      const findOneMock = sinon.stub(models.carrera, 'findOne').resolves({
        id: 7,
        nombre: 'Licenciatura en Biotecnología',
        descripcion: '--',
        duracion: '5 años',
        titulo: 'Licenciado/a en Biotecnología',
        destroy: destroyStub, // Añade el stub de destroy al objeto carrera
      });

      // Realiza la solicitud de eliminación de la carrera y realiza las aserciones
      const res = await request(app).delete('/carrera/7');

      // Verificar que la respuesta tenga el código 200
      expect(res.status).to.equal(200);
      // Verificar que la respuesta tenga el mensaje esperado
      expect(res.body).to.have.property(
        'message',
        'Carrera eliminada correctamente',
      );

      // Verificar que el stub haya sido llamado una vez
      // expect(destroyStub.calledOnce).to.be.true;

      // Restaurar el comportamiento original del modelo Carrera
      destroyStub.restore();
      findOneMock.restore();
    });
  });
});
