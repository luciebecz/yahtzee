import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import About from './About';
import Rules from './Rules';
import Scores from './Scores';
import Yahtzee from './Yahtzee';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

class App extends Component {
  state = { name: '', edit: true };

  toggleEdit = () => {
    this.setState( (state) => {
      return { edit: !state.edit };
    }); 
  }

  submitName = (e) => {
    //this is where we could do a network request to update the database
    e.preventDefault();
    this.toggleEdit();
  }

  changeName = (e) => {
    // this is for our controlled component so it sets state and passes it down 
    this.setState({ name: e.target.value });
  }

  render() {
    let { state: { name, edit }, changeName, submitName, toggleEdit } = this;
    return(
      <div>
        <NavBar />
        <Switch>
          <ProtectedRoute exact path='/' component={Yahtzee} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/scores" component={Scores} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
