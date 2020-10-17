import React, {Component} from 'react';
import './App.css';
import Player from './Player'
import CU from './CU'
import Table from './Table'

import twoH from './cards/2H.jpg'

class App extends Component {
  state = {
    cards: [
      {id: 0, number: 2, img: twoH, active: true}
    ]
  }
  render() { 
    return ( 
    <div className="game_area">
      <CU cards={this.state.cards}/>
      <Table cards={this.state.cards} />
      <Player cards={this.state.cards}/>
    </div>
   );
  }
}
 
export default App;
