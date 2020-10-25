import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component{

    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h4>{this.props.movie.Title}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            
                            <p>{this.props.movie.Year}</p>
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
    
}
