import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component{
    //this is data to be used by the class
    state = {
        //Movies is now = to an empty array
        movies:[        ]
    };

    //Lifestylehook using axios
    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        //for fulfilled state
        .then(
            //arrow function ()=>{} looks like rocket ship
            (response)=>{
                //Json response.data
                this.setState({ movies: response.data.Search})
            }
        )
        //for rejected state, error that comes back.
        .catch(
            (error)=>{
            console.loge(error)}
        );
    }

    render(){
        return (
        //jsx
        <div>
            <h3>Hello from Read Component</h3>
            <Movies mymovies={this.state.movies}></Movies>
        </div>
        );
    }
}