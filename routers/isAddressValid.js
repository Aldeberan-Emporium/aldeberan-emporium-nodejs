require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/isaddvalid", (req, res) => {
    var address = req.query.address;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_MAP_JS)
    .then(response => {
        const data = response.data.results[0].address_components;
        const country = data.some(country => country.short_name == "MY");
        const state = data.some(country => country.short_name == "Sabah" || country.short_name == "Sarawak");
        if (country){
            if (!state){
                res.json({
                    status : "200",
                    msg : "Address is valid."
                });
            }
            else{
                res.json({
                    status : "500",
                    msg : "Delivery to East Malaysia is not supported yet! Sorry for inconvinience caused."
                });
            }
        }
        else{
            res.json({
                status : "500",
                msg : "Delivery is only available within Malaysia!"
            });
        }
    })
    .catch(error => {
        res.json({status : error.response.status});
    });
});

module.exports = router;
