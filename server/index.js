const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const KEY = require('../config.js');
const yelp = require('yelp-fusion');
const client = yelp.client(KEY.YELP_API_KEY);



app.use(express.static(path.join(__dirname, '..', 'public')))
app.get('/yelp', (req, res) => {
  client.phoneSearch({
    phone: '+14157492060'
  }).then(response => {
    console.log(response.jsonBody.businesses[0].name);
    res.json(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})