const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Dogs = require('../lib/models/DogModel');
const Cows = require('../lib/models/CowModel');

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
});

test('/cows/:id returns cow detail', async () => {
  const res = await request(app).get('/cows/1');
  const herb = {
    id: '1',
    name: 'Herb',
    age: 17,
    type: 'Beefalo',
    alias: 'the Nose',
    color: 'burgundy',
    movie: 'The Talking Heads (Live): Stop Making Sense',
    chill: true
  };
  expect(res.body).toEqual(herb);
});

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

  afterAll(() => {
    pool.end();
  });
  
});
