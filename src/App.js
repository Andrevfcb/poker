import React, {Component} from 'react';
import './App.css';
import Player from './Player'
import CU from './CU'
import Table from './Table'

import twoH from './cards/2H.jpg'
import twoC from './cards/2C.jpg'
import twoD from './cards/2D.jpg'
import twoS from './cards/2S.jpg'
import threeH from './cards/3H.jpg'
import threeC from './cards/3C.jpg'
import threeD from './cards/3D.jpg'
import threeS from './cards/3S.jpg'
import fourH from './cards/4H.jpg'
import fourC from './cards/4C.jpg'
import fourD from './cards/4D.jpg'
import fourS from './cards/4S.jpg'
import fiveH from './cards/5H.jpg'
import fiveC from './cards/5C.jpg'
import fiveD from './cards/5D.jpg'
import fiveS from './cards/5S.jpg'
import sixH from './cards/6H.jpg'
import sixC from './cards/6C.jpg'
import sixD from './cards/6D.jpg'
import sixS from './cards/6S.jpg'
import sevenH from './cards/7H.jpg'
import sevenC from './cards/7C.jpg'
import sevenD from './cards/7D.jpg'
import sevenS from './cards/7S.jpg'
import eightH from './cards/8H.jpg'
import eightC from './cards/8C.jpg'
import eightD from './cards/8D.jpg'
import eightS from './cards/8S.jpg'
import nineH from './cards/9H.jpg'
import nineC from './cards/9C.jpg'
import nineD from './cards/9D.jpg'
import nineS from './cards/9S.jpg'
import tenH from './cards/10H.jpg'
import tenC from './cards/10C.jpg'
import tenD from './cards/10D.jpg'
import tenS from './cards/10S.jpg'
import jH from './cards/JH.jpg'
import jC from './cards/JC.jpg'
import jD from './cards/JD.jpg'
import jS from './cards/JS.jpg'
import qH from './cards/QH.jpg'
import qC from './cards/QC.jpg'
import qD from './cards/QD.jpg'
import qS from './cards/QS.jpg'
import kH from './cards/KH.jpg'
import kC from './cards/KC.jpg'
import kD from './cards/KD.jpg'
import kS from './cards/KS.jpg'
import aH from './cards/AH.jpg'
import aC from './cards/AC.jpg'
import aD from './cards/AD.jpg'
import aS from './cards/AS.jpg'


class App extends Component {
  state = {
    cards: [
      {id: 0, number: 2, img: twoH, active: true},
      {id: 1, number: 5, img: fiveS, active: true},
      {id: 2, number: "asC", img: aC, active: true},
      {id: 3, number: "queenD", img: qD, active: true},
      {id: 4, number: 10, img: tenD, active: true},
    ],
    playerHand:
    [
      {number: 7},
      {number: 8}
    ],
    AIHand:
    [
      {number: 2},
      {number: 3}
    ],
    tableHand:
    [
      {number: 2},
      {number: 3},
      {number: 4},
      {number: 5},
      {number: 6}
    ],
    // playerOptions:
    // {
      royalFlush: false,
      straightFlush: false,
      fourOfKind: false,
      fullHouse: false,
      flush: false,
      streigh: false,
      threeOfAKind: false,
      twoPairs: false,
      onePair: false,
      hightCard: false
    // }
  }

  compareNumbers(a, b) {
    return a - b
  } 
  
  checkIfStreigh = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand.number)
    })
    tableAndPlayerHand.sort(this.compareNumbers)
    

    tableAndPlayerHand.forEach((hand, id) => {
      if (hand == tableAndPlayerHand[id + 1] && hand == tableAndPlayerHand[id + 2] && hand == tableAndPlayerHand[id + 3]) {
        tableAndPlayerHand.splice(id, 3)
      } else if (hand == tableAndPlayerHand[id + 1] && hand == tableAndPlayerHand[id + 2]) {
        tableAndPlayerHand.splice(id, 2)
      } else if (hand == tableAndPlayerHand[id + 1]) {
        tableAndPlayerHand.splice(id, 1)}
    })
    if (tableAndPlayerHand.length >= 5) {
      if (tableAndPlayerHand[6] - 4 == tableAndPlayerHand[2]) {
        this.setState({
            streigh: true
        })
      } else if (tableAndPlayerHand[5] - 4 == tableAndPlayerHand[1]) {
        this.setState({
          streigh: true
      })
      } else if (tableAndPlayerHand[4] - 4 == tableAndPlayerHand[0]) {
        this.setState({
          streigh: true
      })
      }
    } else return console.log('za mało');
  }

  render() { 
    return ( 
    <div className="game_area">
      <button onClick={this.checkIfStreigh}>SPRAWDŹ</button>
      <button onClick={() => {console.log(this.state.streigh);
      }}>SPRAWDŹ2</button>
      <CU cards={this.state.cards}/>
      <Table cards={this.state.cards} />
      <Player cards={this.state.cards}/>
    </div>
   );
  }
}
 
export default App;
