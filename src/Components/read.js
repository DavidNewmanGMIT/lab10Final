import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {
    //this is data to be used by the class
    state = {
        //Movies is now = to an empty array
        movies: []
    };

    //Lifestylehook using axios
    componentDidMount() {
        //jSon blob, didnt run at first, remember to have server.js on as well
        axios.get('http://localhost:4000/api/movies')
            //for fulfilled state
            .then(
                //arrow function ()=>{} looks like rocket ship
                (response) => {
                    //Json response.data
                    this.setState({ movies: response.data.movies })
                }
            )
            //for rejected state, error that comes back.
            .catch(
                (error) => {
                    console.loge(error)
                }
            );
    }

    render() {
        return (
            //jsx
            <div>
                <h3>Hello from Read Component</h3>
                <Movies mymovies={this.state.movies}></Movies>
            </div>
        );
    }
}