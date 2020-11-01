import React from 'react';

export class Create extends React.Component {

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

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    onChangeYear(e){
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
                            value='Add Movie'
                            className='btn btn-primary'>
                        </input>

                    </div>

                </form>
            </div>
        );
    }
}