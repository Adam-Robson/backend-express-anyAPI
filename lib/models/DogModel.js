const pool = require('../utils/pool');
module.exports = class DogModel {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.type = row.type;
    this.size = row.size;
    this.snack = row.snack;
    this.song = row.song;
    this.singer = row.singer;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM doggys');
    return rows.map((dogRow) => new DogModel(dogRow));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM doggys WHERE id = $1', [id]);
    return rows.length > 0 ? new DogModel(rows[0]) : null;
  }
};
