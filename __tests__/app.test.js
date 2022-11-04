const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Dogs = require('../lib/models/DogModel');
const Cows = require('../lib/models/CowModel');

describe('doggys routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/doggys returns list of dogs and details',
    async () => {
      const res = await request(app).get('/doggys');
      const data = await Dogs.getAll();
      expect(res.body).toEqual(data);
    });
  test('/doggys/:id returns dog detail', async () => {
    const res = await request(app).get('/doggys/1');
    const vincent = {
      id: '1',
      name: 'Vincent',
      age: 11,
      type: 'Afghan Hound',
      size: 'large',
      snack: 'cheez-its',
      song: 'ACDC Ride On',
      singer: false
    };
    expect(res.body).toEqual(vincent);
  });
});

describe('cows routes', () => {

  beforeEach(() => {
    return setup(pool);
  });

  test('/cows returns list of cows and details',
    async () => {
      const res = await request(app).get('/cows');
      const data = await Cows.getAllCows();
      expect(res.body).toEqual(data);
    });

  afterAll(() => {
    pool.end();
  });

});
