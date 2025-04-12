const r = require("express").Router();
const c = require("../controllers/cart");

r.post("/",         c.add);
r.delete("/:id",    c.remove);
r.post("/checkout", c.checkout);

module.exports = r;
