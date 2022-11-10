const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
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

  afterAll(() => {
    pool.end();
  });
});
