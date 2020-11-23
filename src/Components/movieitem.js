import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component{

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
                    </Card.Body>
                </Card>
            </div>
        );
    }
    
}
