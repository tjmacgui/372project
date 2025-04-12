const db = require("../db");

const BASE = `SELECT p.id, p.name, c.name AS category,
                     p.price, p.description, p.image_url
              FROM products p JOIN categories c ON p.category_id = c.id`;

exports.all        = () => db.all(`${BASE}`);
exports.byId       = id => db.get(`${BASE} WHERE p.id = ?`, id);
exports.byCategory = cat => db.all(`${BASE} WHERE c.name LIKE ?`, `%${cat}%`);

exports.add = p => db.run(
  `INSERT INTO products (name, category_id, price, description, image_url)
   VALUES (?,?,?,?,?)`,
  p.name, p.category_id, p.price, p.description, p.image_url
);

exports.edit = (id, p) => db.run(
  `UPDATE products
     SET name = ?, category_id = ?, price = ?, description = ?, image_url = ?
   WHERE id = ?`,
  p.name, p.category_id, p.price, p.description, p.image_url, id
);

exports.bulk = list => {
  const sql = `INSERT INTO products (name, category_id, price, description, image_url)
               VALUES (?,?,?,?,?)`;
  list.forEach(p =>
    db.run(sql, p.name, p.category_id, p.price, p.description, p.image_url)
  );
};
