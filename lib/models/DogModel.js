const pool = require('../utils/pool');
module.exports = class DogModel {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.age = row.age;
    this.favorite_food = row.favorite_food;
    this.mischief = row.favorite_mischief;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM dog_model');
    return rows.map((dogRow) => new DogModel(dogRow));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dog_model WHERE id = $1', [id]);
    return rows.length > 0 ? new DogModel(rows[0]) : null;
  }
};
