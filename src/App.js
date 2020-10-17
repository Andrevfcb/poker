import React, {Component} from 'react';
import './App.css';


class App extends Component {
  state = {
    cards: [
      {id: 0, number: 2}
    ]
  }
  render() { 
    return ( 
    <div className="game_area">
      <div className="cu"></div>
      <div className="table"></div>
      <div className="player"></div>
    </div>
   );
  }
}
 
export default App;
