const r = require("express").Router();
const c = require("../controllers/products");

r.get("/all",   c.list);
r.get("/:id",   c.single);
r.get("/",      c.filter);

r.post("/new",  c.add);
r.put("/:id",   c.edit);
r.post("/bulk", c.bulk);

module.exports = r;
