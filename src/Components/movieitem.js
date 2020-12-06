import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component{

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //onClick event to delete movie
    DeleteMovie(e){
        //stop from method being called everytime page is called
        e.preventDefault();
        console.log("Delete " + this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h4>{this.props.movie.title}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            
                            <p>{this.props.movie.year}</p>
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            </footer>
                        </blockquote>
                        {/* delete button */}
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
    
}
