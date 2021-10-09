require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/latlng", (req, res) => {
    var address = req.query.address;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_MAP_JS)
    .then(response => {
        console.log(response.data.results[0].geometry.location.lat);
        let data = {
            lat : response.data.results[0].geometry.location.lat,
            lng : response.data.results[0].geometry.location.lng
        };
        res.json(data);
    })
    .catch(error => {
        res.json({status : error.response.status});
    });
});

module.exports = router;
