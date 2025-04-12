const Database = require("better-sqlite3");
const db = new Database("shop.db");
module.exports = {
  all:  (sql, ...p) => db.prepare(sql).all(...p),
  get:  (sql, ...p) => db.prepare(sql).get(...p),
  run:  (sql, ...p) => db.prepare(sql).run(...p),
  close:          () => db.close()
};
