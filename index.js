require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const latLng = require("./routers/latLng");
const isAddressValid = require("./routers/isAddressValid");

app.use(cors());
app.use(express.json());

app.get("/latlng", latLng);
app.get("/isaddvalid", isAddressValid);

app.listen(process.env.PORT || 3000);





