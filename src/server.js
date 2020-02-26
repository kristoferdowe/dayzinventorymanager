const inventoryRoutes = require("./inventoryroutes");
const express = require("express");
const app = express();

module.exports = function(app, db) {
  inventoryRoutes(app, db);
};

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});
