
const express = require('express');
const app = express()
const port = 4000
//include cors libary
const cors = require('cors');
const bodyParser = require("body-parser");

//include Mongoose
const mongoose = require('mongoose');

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

const myConnectionString = 'mongodb+srv://admin:admin@cluster0.lfbfs.mongodb.net/movies?retryWrites=true&w=majority';
//Mongoose connection
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//mongoose schema
const Schema = mongoose.Schema;

//define schema, store title, year and poster
var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String
});

//create modle, just need to refer to MovieModle, meant to be MovieModel!
var MovieModle = mongoose.model("movie", movieSchema);

//add new root point
app.get('/api/movies', (req, res) => {

    // const myMovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];

    //find doucments in databases
    MovieModle.find((err, data) => {
        res.json(data);

    })

    //pass down to server
    // res.status(200).json({
    //     //can add more data
    //     message: "Okay is everything?",
    //     movies: myMovies
    // });
})

//log name id in database
app.get('/api/movies/:id', (req,res) => {
    console.log(req.params.ie);

    //find Id from database using model
    MovieModle.findById(req.params.id,(err,data) => {
        res.json(data);
    })
})

app.put('/api/movies/:id', (req, res) => {
    console.log("Update Movie" +req.params.ie);
    //incase need to debug later, same we did with post
    console.log(req.body);

    //find Id from database using model, find record by id and update
    MovieModle.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err, data)=>{
            res.send(data);
        })
})

//listen for a http delete method
app.delete('/api/movies/:id', (req, res) => {
    console.log("Delete Movie: " + req.params.id);

    MovieModle.findByIdAndDelete(req.params.id,(err , data) => {
        res.send(data); //send back data when updated
    })
})

//listening for post requests
app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved!');
    //server to pull out data, title, year and poster
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    //interact
    MovieModle.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    });

    //to stop client from sending data twice
    res.send('item added');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})