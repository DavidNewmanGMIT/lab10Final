
const express = require('express');
const app = express()
const port = 4000
//include cors libary
const cors = require('cors');
const bodyParser = require("body-parser");


//use cors package
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// arse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//add new root point
app.get('/api/movies', (req, res) => {

    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    //pass down to server
    res.status(200).json({
        //can add more data
        message: "Okay is everything?",
        movies: myMovies
    });
})

//listening for post requests
app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved!');
    //server to pull out data, title, year and poster
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})