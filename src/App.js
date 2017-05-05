import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Game from './Game';

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
        { edit ? 
          <Player 
            name={ name } 
            handleChange={ changeName } 
            handleSubmit={ submitName }
          /> :
          <Game player={ name } toggleEdit={ toggleEdit } />
        }
      </div>
    );
  }
}

export default App;
