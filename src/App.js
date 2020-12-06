import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/footer';
import { Header } from './Components/header';
import { Content } from './Components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
// imported Navbar and Nav 
import {Navbar,Nav} from 'react-bootstrap';
//5.b imported to change between pages using React Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Auto Import
import { Read } from './Components/read';
import { Create } from './Components/create';
import { Movies } from './Components/movies';
import { Edit } from './Components/edit';

//comment

// 3.b Updated App.js to have a class that inherits React.Component with render method
class App extends React.Component {

  render() {
    return (
      // 5.b Router wrapping whole div
      <Router>

      {/* 5.a add navi bar from bootstrap */}
      <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <br />

        {/* 5.b routing using react */}
        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/create' component={Create} />
          <Route path='/read' component={Read} />
          <Route path='/edit/:id' component={Edit}></Route>
        </Switch>


       
        {/* <Header></Header> */}
        {/* shift + alt + f to tiddy up code  */}
        {/* 3.a Displays text hello world! in a h1 heading */}
        {/* <h1>Hello World!</h1> */}
        {/* 3.c Displays local time on page in a header*/}
        {/* <h2>It is {new Date().toLocaleTimeString()}</h2> */}
        {/* hold control then press k and then c for comments */}
        {/* <Content></Content>
        <Footer></Footer> */}

      </div>
      </Router>
    );

  }
}

// Press ctrl and c twice in command window to stop Web App from running

export default App;
