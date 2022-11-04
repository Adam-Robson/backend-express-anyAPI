const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Dogs = require('../lib/models/DogModel');

describe('dogs routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/dogs returns list of dogs and details',
    async () => {
      const res = await request(app).get('/dogs');
      const data = await Dogs.getAll();
      expect(res.body).toEqual(data);
    }
  );

  it('/dogs/:id returns dog detail', async () => {
    const res = await request(app).get('/dogs/1');
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

  afterAll(() => {
    pool.end();
  });
});
