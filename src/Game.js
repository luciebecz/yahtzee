import React from 'react';
import Board from './Board';
import ScoreCard from './ScoreCard';

class Game extends React.Component {
  state = { roll: 0, dice: [...new Array(5)], keep: [], endGame: false }

  resetRoll = () => {
    this.setState({ roll: 0, dice: [...new Array(5)], keep: [] });
  }

  rollDice = () => {
    let { keep } = this.state; 
    let dice = this.state.dice.map( (el, i) => {
      if (keep.includes(i))
        return el
      return Math.floor(Math.random() * 6) + 1
    });
    this.setState( (state) => {
      return { dice, roll: state.roll + 1 }
    });
  }

  toggleKept = (i) => {
    let { keep } = this.state;
    let updatedKeep;

    if (keep.includes(i))
      updatedKeep = keep.filter( k => k !== i )
    else
      updatedKeep = [...keep, i]

    this.setState({ keep: updatedKeep })
  }

  endGame = () => {
    if (!this.state.endGame)
      this.setState({ endGame: true });
  }

  newGame = () => {
    this.resetRoll();
    this.setState({ endGame: false });
  }

  render() {
    let { player, editPlayer } = this.props;
    let { roll, dice, keep, endGame } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="col s6">
              <h4>Welcome {player}</h4>
            </div>
            <div className="col s6">
              <button className="btn btn-flat right" onClick={editPlayer}>Edit Name</button>
            </div>
          </div>
          <div style={styles.fullHeight} className="col s12 m8 green lighten-3">
            { endGame ?
              <h1 className="center">Game Over</h1> :
              <Board 
                roll={roll} 
                dice={dice} 
                keep={keep} 
                rollDice={this.rollDice} 
                toggleKept={this.toggleKept}
              />
            }
          </div>
          <div style={styles.fullHeight} className="col s12 m4 purple lighten-3">
            <ScoreCard 
              dice={dice} 
              roll={roll} 
              resetRoll={this.resetRoll} 
              endGame={this.endGame} 
              newGame={this.newGame} 
              startNew={this.state.endGame} 
            />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  fullHeight: {
    height: 'calc(165vh - 67px)'
  }
}

export default Game