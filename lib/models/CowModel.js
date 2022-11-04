const pool = require('../utils/pool');
const CowModel = require('../controllers/cows');
module.exports = class CowModel {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.type = row.type;
    this.alias = row.alias;
    this.color = row.color;
    this.movie = row.movie;
    this.chill = row.chill;
  }
  static async getAllCows() {
    const { rows } = await pool.query('SELECT * FROM cows');
    return rows.map((cowRow) => new CowModel(cowRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cows WHERE id = $1', [id]);
    return new CowModel(rows[0]);
  }
};
