import React, { Component } from 'react';
import gameShips from '../data.json';
import Board from './board/Board';

//contains all of the game logic
class Game extends Component {
  constructor() {
    super();
    this.state = {
      chances: 20,
      hits: 0,
      ships: [...gameShips.layout],
    };
  }
  //this event handler will take in the coodinates when a button is clicked and compare it to the location of the boats
  onClick = (coordinates) => {
    const { chances, hits } = this.state;
    //takes the string,splits it into two and turns it into two numbers so I can use to compare
    const [x, y] = coordinates.split(',').map((num) => parseInt(num));

    let ships = [...this.state.ships];
    //loops through the initial array of objects
    for (let i = 0; i < ships.length; i++) {
      let position = ships[i].positions;
      //loops through the nested array/location of the boats and compares it with the the button that is pushed
      for (let j = 0; j < position.length; j++) {
        if (position[i][0] === x && position[i][1] === y) {
          alert(`Hit at ${[x, y]}`);
          this.setState({ hits: hits + 1 });
          return 'hit';
        } else {
          this.setState({ ships: ships, chances: chances - 1 });
        }
      }
    }
    return 'miss';
  };
  render() {
    return (
      <div>
        <Board onClick={this.onClick} />
      </div>
    );
  }
}

export default Game;
