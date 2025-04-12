"use strict";
const express = require("express");
const app     = express();
const routes  = require("./routes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", routes.products);
app.use("/cart",     routes.cart);

const PORT   = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`★ Listening on :${PORT}`));

process.on("SIGINT", () => {
  require("./db").close();
  server.close(() => process.exit(0));
});
