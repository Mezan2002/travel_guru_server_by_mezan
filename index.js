const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const places = require("./data/places.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Travel Guru Server is Running");
});

app.get("/places", (req, res) => {
  res.send(places);
});

app.get("/places/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedPlace = places.find((plc) => plc.id === id);
  res.send(selectedPlace);
});

app.listen(port, () => {
  console.log(`Travel Guru Server is Running on Port ${port}`);
});
