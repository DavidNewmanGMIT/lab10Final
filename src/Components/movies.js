import React from 'react';
import { MovieItem } from './movieitem';

export class Movies extends React.Component{

    render() {
        //map function
        return this.props.mymovies.map(
            (movie) => {
                return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
            }
        );
    }
}