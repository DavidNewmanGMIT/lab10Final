import React from 'react';
import '../App.css';

// 4.b header.js Component with text

export class Header extends React.Component {

    render(){
        return (
            <div> 
                <h1>My Header in Another Component</h1>
                <h3>This is the Header Component</h3>
            </div>

        )
    }
}