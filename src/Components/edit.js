import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    //for Forms
    constructor() {
        //invoke parent, error from this.super();
        super();

        //wont excute unless its binded to the instance
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''

        }
    }

    //lifeCycle hook, when compment mounted
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        //if it works
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        //if it dosnt, error
        .catch((error)=>{
            console.log(error);
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    //Get called when value of input control changes
    onChangeTitle(e) {
        this.setState({
            //error capital T on target
            Title: e.target.value
        });
    }

    //method for button
    onSubmit(e) {
        e.preventDefault();

        //Alret to display movie is entered correctly
        //dont have to write culrys here cause outside jsx code
        alert("Movie: " + this.state.Title + " Year: " + this.state.Year + " Poster: " + this.state.Poster);

        //Object
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }
        
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
        .then(res => {
            console.log(res.data)
        })
        .catch();


        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}>
                        </input>
                        {/* dosnt matter double or single quotes */}
                    </div>

                    <div className='form-group'>
                        <label>Add Movie Year</label>
                        <input type='text'
                            //styling
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <label>Add Movie Poster</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        {/* button */}
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'>
                        </input>

                    </div>

                </form>
            </div>
        );
    }
}