import React, { Component } from 'react';
import '../App.css';

// 4.a content.js Component with text

export class Content extends React.Component {

    render(){
        return (
            <div> 
                <h1>My Content in Another Component</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
                <h3>This is Content Component</h3>
            </div>

        )
    }
}