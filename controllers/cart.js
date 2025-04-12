const Cart = require("../models/cart");
exports.add      = (req, res) => { Cart.add(req.body);    res.json(Cart.items()); };
exports.remove   = (req, res) => { Cart.remove(req.params.id); res.json(Cart.items()); };
exports.checkout = (_r,  res) => { Cart.clear();          res.json({ ok: true }); };
