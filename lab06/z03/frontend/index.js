const express = require('express');
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
    axios.get("http://backend:3000/data")
        .then(response => res.send(response.data));
})

app.listen(3001, () => {
    console.log("Server listening on posrt 3001")
})