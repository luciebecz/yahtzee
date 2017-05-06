import React from 'react';
import Player from './Player';
import Game from './Game';

class Yahtzee extends React.Component {
  state = { name: '', edit: true }

  updatePlayer = (name) => {
    this.setState({ name, edit: false })
  }

  editPlayer = () => {
    this.setState({ edit: true });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    let { state: { name, edit }, updatePlayer, editPlayer } = this;
    return (
      <div>
        { edit ?
          <Player 
            handleSubmit={updatePlayer} 
            name={name} 
            handleChange={this.handleChange}
          />
          :
          <Game player={name} editPlayer={editPlayer} />
        }
      </div>
    )
  }
}

export default Yahtzee;