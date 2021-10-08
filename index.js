require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const latLng = require("./map/latlng");

app.use(cors());
app.use(express.json());

app.get("/latlng", latLng);

app.listen(process.env.PORT || 3000);





