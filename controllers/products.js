const Product = require("../models/product");

exports.list   = (_req, res) => res.json(Product.all());
exports.single = (req,  res) => {
  const row = Product.byId(req.params.id);
  row ? res.json(row) : res.status(404).send("Product not found");
};
exports.filter = (req,  res) => {
  const cat = req.query.category || "";
  res.json(cat ? Product.byCategory(cat) : Product.all());
};

exports.add  = (req, res) => { Product.add(req.body);               res.json({ ok: true }); };
exports.edit = (req, res) => { Product.edit(req.params.id, req.body); res.json({ ok: true }); };
exports.bulk = (req, res) => { Product.bulk(req.body);              res.json({ ok: true }); };
