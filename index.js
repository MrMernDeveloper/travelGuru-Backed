const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const places = require('./data/data.json')
const hotels  = require ('./data/hotels.json')
app.get('/', (req, res) => {
    res.send(' Travel guru running')
});

app.get('/places', (req, res) => {
    res.send(places)
});

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const selectedPlace = places.find(ps => ps.id === id)
    res.send(selectedPlace)
});
app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const currentHotels = hotels.filter(h => h.category_id === id);
    res.send(currentHotels)
})


app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})