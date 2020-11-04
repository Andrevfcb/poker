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
      {id: 0, number: 2, color: 'heart', img: twoH, active: true},
      {id: 1, number: 2, color: 'club', img: twoC, active: true},
      {id: 2, number: 2, color: 'diamond', img: twoD, active: true},
      {id: 3, number: 2, color: 'spade', img: twoS, active: true},
      {id: 4, number: 3, color: 'heart', img: threeH, active: true},
      {id: 5, number: 3, color: 'club', img: threeC, active: true},
      {id: 6, number: 3, color: 'diamond', img: threeD, active: true},
      {id: 7, number: 3, color: 'spade', img: threeS, active: true},
      {id: 8, number: 4, color: 'heart', img: fourH, active: true},
      {id: 9, number: 4, color: 'club', img: fourC, active: true},
      {id: 10, number: 4, color: 'diamond', img: fourD, active: true},
      {id: 11, number: 4, color: 'spade', img: fourS, active: true},
      {id: 12, number: 5, color: 'heart', img: fiveH, active: true},
      {id: 13, number: 5, color: 'club', img: fiveC, active: true},
      {id: 14, number: 5, color: 'diamond', img: fiveD, active: true},
      {id: 15, number: 5, color: 'spade', img: fiveS, active: true},
      {id: 16, number: 6, color: 'heart', img: sixH, active: true},
      {id: 17, number: 6, color: 'club', img: sixC, active: true},
      {id: 18, number: 6, color: 'diamond', img: sixD, active: true},
      {id: 19, number: 6, color: 'spade', img: sixS, active: true},
      {id: 20, number: 7, color: 'heart', img: sevenH, active: true},
      {id: 21, number: 7, color: 'club', img: sevenC, active: true},
      {id: 22, number: 7, color: 'diamond', img: sevenD, active: true},
      {id: 23, number: 7, color: 'spade', img: sevenS, active: true},
      {id: 24, number: 8, color: 'heart', img: eightH, active: true},
      {id: 25, number: 8, color: 'club', img: eightC, active: true},
      {id: 26, number: 8, color: 'diamond', img: eightD, active: true},
      {id: 27, number: 8, color: 'spade', img: eightS, active: true},
      {id: 28, number: 9, color: 'heart', img: nineH, active: true},
      {id: 29, number: 9, color: 'club', img: nineC, active: true},
      {id: 30, number: 9, color: 'diamond', img: nineD, active: true},
      {id: 31, number: 9, color: 'spade', img: nineS, active: true},
      {id: 32, number: 10, color: 'heart', img: tenH, active: true},
      {id: 33, number: 10, color: 'club', img: tenC, active: true},
      {id: 34, number: 10, color: 'diamond', img: tenD, active: true},
      {id: 35, number: 10, color: 'spade', img: tenS, active: true},
      {id: 36, number: 11, color: 'heart', img: jH, active: true},
      {id: 37, number: 11, color: 'club', img: jC, active: true},
      {id: 38, number: 11, color: 'diamond', img: jD, active: true},
      {id: 39, number: 11, color: 'spade', img: jS, active: true},
      {id: 40, number: 12, color: 'heart', img: qH, active: true},
      {id: 41, number: 12, color: 'club', img: qC, active: true},
      {id: 42, number: 12, color: 'diamond', img: qD, active: true},
      {id: 43, number: 12, color: 'spade', img: qS, active: true},
      {id: 44, number: 13, color: 'heart', img: kH, active: true},
      {id: 45, number: 13, color: 'club', img: kC, active: true},
      {id: 46, number: 13, color: 'diamond', img: kD, active: true},
      {id: 47, number: 13, color: 'spade', img: kS, active: true},
      {id: 48, number: 14, color: 'heart', img: aH, active: true},
      {id: 49, number: 14, color: 'club', img: aC, active: true},
      {id: 50, number: 14, color: 'diamond', img: aD, active: true},
      {id: 51, number: 14, color: 'spade', img: aS, active: true},
    ],
    playerHand:
    [],
    AIHand:
    [],
    tableHand:
    [],
    playerOptions:
    {
      royalFlush: false,
      straightFlush: false,
      fourOfKind: false,
      fullHouse: false,
      flush: false,
      streigh: false,
      threeOfAKind: false,
      twoPairs: false,
      onePair: false,
      hightCard: true
    },
    CUOptions:
    {
      royalFlush: false,
      straightFlush: false,
      fourOfKind: false,
      fullHouse: false,
      flush: false,
      streigh: false,
      threeOfAKind: false,
      twoPairs: false,
      onePair: false,
      hightCard: true
    },
    highPCard: 0,
    highCCard: 0,
    playerMoney: 200,
    cuMoney: 500,
    playerBID: 0,
    cuBID: 0,
    allBID: 0,
    playerRaise: 0,
    cuRaise: 0,
    turn: 1,
    playerPlayed: false,
    cuPlayed: false,
    part: 0,
    round: 1
  }


  // componentDidUpdate(prevState) {
  //   // Typowy sposób użycia (nie zapomnij porównać właściwości):
  //   if (this.state.playerOptions !== prevState.playerOptions) {
  //     this.checkIfPair()}
  // }
  

  compareNumbers(a, b) {
    return a - b
  }
  compareNumbersInObject(a, b) {
    return a.number - b.number
  }
  
  restart = () => {
    this.setState(prevState => ({
    playerHand: [],
    AIHand: [],
    tableHand: [],
    playerBID: 0,
    cuBID: 0,
    allBID: 0,
    playerPlayed: false,
    cuPlayed: false,
    turn: 1,
    part: 0,
    round: prevState.round++,
    playerOptions:
    {
      royalFlush: false,
      straightFlush: false,
      fourOfKind: false,
      fullHouse: false,
      flush: false,
      streigh: false,
      threeOfAKind: false,
      twoPairs: false,
      onePair: false,
      hightCard: true
    },
    CUOptions:
    {
      royalFlush: false,
      straightFlush: false,
      fourOfKind: false,
      fullHouse: false,
      flush: false,
      streigh: false,
      threeOfAKind: false,
      twoPairs: false,
      onePair: false,
      hightCard: true
    }
  }))
  }

  checkState = () => {
    console.log(this.state.playerOptions);
    console.log(this.state.CUOptions);
    console.log(this.state.highPCard);
    console.log(this.state.highCCard);
    console.log(this.state.playerPlayed);
    console.log(this.state.round);
  }

  play = () => {
    // if (this.state.playerHand.length !== 2 && this.state.AIHand.length !== 2) {
    this.getPlayersCards()
    this.getAICards()
    this.checkOptions()
  // }
}

  getToNext = () => {
    
    this.getTableCards()
    if (this.state.part == 3) {
      this.checkResult()
      setTimeout(() => {this.play()}, 2000)
    } else { 
    this.checkOptions()
    this.setState(prevState => ({
        playerBID: 0,
        cuBID: 0,
        allBID: prevState.allBID + prevState.playerBID + prevState.cuBID,
        playerPlayed: false,
        cuPlayed: false,
        turn: 1,
        part: prevState.part++
      }))
    }
    if (this.state.playerMoney == 0 || this.state.cuMoney == 0) {
      setTimeout(() => {this.playerCHECK()}, 1000)
      setTimeout(() => {this.cuCHECK()}, 2000)
    }
  }

  handleRChange = e => {
    if (e.target.name === 'player') {
    this.setState({
      playerRaise: e.target.value
    })
  } else {this.setState({
    cuRaise: e.target.value
  })}
  }

  checkOptions = () => {
    this.checkIfPair()
    this.checkIfTwoPairs()
    this.checkIfThree()
    this.checkIfStreigh()
    this.checkIfFlush()
    this.checkIfFullHouse()
    this.checkIfFour()
    this.checkIfStraightFlush()
    this.checkIfRoyalFlush()
  }

  checkResult = () => {
    let pOption
    let cOption
    let whoWin
    let cards = this.state.cards
    let playerHand = this.state.playerHand
    let AIHand = this.state.AIHand
    let tableHand = this.state.tableHand
        if (this.state.playerOptions.royalFlush) {pOption = 10}
        else if (this.state.playerOptions.straightFlush)  {pOption = 9}
        else if (this.state.playerOptions.fourOfKind) {pOption = 8}
        else if (this.state.playerOptions.fullHouse) {pOption = 7}
        else if (this.state.playerOptions.flush) {pOption = 6}
        else if (this.state.playerOptions.streigh) {pOption = 5}
        else if (this.state.playerOptions.threeOfAKind) {pOption = 4}
        else if (this.state.playerOptions.twoPairs) {pOption = 3}
        else if (this.state.playerOptions.onePair) {pOption = 2}
        else if (this.state.playerOptions.hightCard) {pOption = 1}

        if (this.state.CUOptions.royalFlush) {cOption = 10}
        else if (this.state.CUOptions.straightFlush)  {cOption = 9}
        else if (this.state.CUOptions.fourOfKind) {cOption = 8}
        else if (this.state.CUOptions.fullHouse) {cOption = 7}
        else if (this.state.CUOptions.flush) {cOption = 6}
        else if (this.state.CUOptions.streigh) {cOption = 5}
        else if (this.state.CUOptions.threeOfAKind) {cOption = 4}
        else if (this.state.CUOptions.twoPairs) {cOption = 3}
        else if (this.state.CUOptions.onePair) {cOption = 2}
        else if (this.state.CUOptions.hightCard) {cOption = 1}
        if (pOption > cOption) {whoWin = 1}
        else if (pOption < cOption) {whoWin = 2}
        else {
            if (this.state.highPCard > this.state.highCCard) {whoWin = 1}
            else if (this.state.highPCard < this.state.highCCard) {whoWin = 2}
            else whoWin = 0
        }
        playerHand.forEach(hand => {cards.push(hand)})
        AIHand.forEach(hand => {cards.push(hand)})
        tableHand.forEach(hand => {cards.push(hand)})
        
        if (whoWin == 1) {
          alert('PLAYER WINS!')
          this.setState(prevState => ({
          cards,
          playerMoney: prevState.playerMoney + prevState.allBID + prevState.playerBID + prevState.cuBID,
          cuMoney: prevState.cuMoney
        }))
        this.restart()
      } else if (whoWin == 2) {
          alert('CU WINS!')
          this.setState(prevState => ({
          cards,
          cuMoney: prevState.cuMoney + prevState.allBID + prevState.playerBID + prevState.cuBID,
          playerMoney: prevState.playerMoney
        }))
        this.restart()
      } else {
          alert('DRAW')
          this.setState(prevState => ({
          cards,
          cuMoney: prevState.cuMoney + ((prevState.allBID + prevState.playerBID + prevState.cuBID)/2),
          playerMoney: prevState.playerMoney + ((prevState.allBID + prevState.playerBID + prevState.cuBID)/2)
        }))
        this.restart()}
  }
  
  checkIfPair = () => {
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
      if (hand == tableAndPlayerHand[id + 1]) {this.setState(prevState => ({playerOptions:
        {
          royalFlush: prevState.playerOptions.royalFlush,
          straightFlush: prevState.playerOptions.straightFlush,
          fourOfKind: prevState.playerOptions.fourOfKind,
          fullHouse: prevState.playerOptions.fullHouse,
          flush: prevState.playerOptions.flush,
          streigh: prevState.playerOptions.streigh,
          threeOfAKind: prevState.playerOptions.threeOfAKind,
          twoPairs: prevState.playerOptions.twoPairs,
          onePair: true,
          hightCard: prevState.playerOptions.hightCard
        },
        highPCard: hand}))}})
    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    tableAndCUHand.sort(this.compareNumbers)
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1]) {this.setState(prevState => ({CUOptions:
        {
          royalFlush: prevState.CUOptions.royalFlush,
          straightFlush: prevState.CUOptions.straightFlush,
          fourOfKind: prevState.CUOptions.fourOfKind,
          fullHouse: prevState.CUOptions.fullHouse,
          flush: prevState.CUOptions.flush,
          streigh: prevState.CUOptions.streigh,
          threeOfAKind: prevState.CUOptions.threeOfAKind,
          twoPairs: prevState.CUOptions.twoPairs,
          onePair: true,
          hightCard: prevState.CUOptions.hightCard
        },
        highCCard: hand}))}
    })
  }

  checkIfTwoPairs = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand.number)
    })
    tableAndPlayerHand.sort(this.compareNumbers)
    let pairs = 0
    let onePair
    tableAndPlayerHand.forEach((hand, id) => {
      if (hand == tableAndPlayerHand[id + 1] && hand !== onePair) {pairs++; onePair = hand;}
    })
    if (pairs >= 2) {this.setState(prevState => ({playerOptions:
      {
        royalFlush: prevState.playerOptions.royalFlush,
        straightFlush: prevState.playerOptions.straightFlush,
        fourOfKind: prevState.playerOptions.fourOfKind,
        fullHouse: prevState.playerOptions.fullHouse,
        flush: prevState.playerOptions.flush,
        streigh: prevState.playerOptions.streigh,
        threeOfAKind: prevState.playerOptions.threeOfAKind,
        twoPairs: true,
        onePair: prevState.playerOptions.onePair,
        hightCard: prevState.playerOptions.hightCard
      },
      highPCard: onePair}))}

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    tableAndCUHand.sort(this.compareNumbers)
    let CUpairs = 0
    let CUonePair
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1] && hand !== CUonePair) {CUpairs++; CUonePair = hand;}
    })
    if (CUpairs >= 2) {this.setState(prevState => ({CUOptions:
      {
        royalFlush: prevState.CUOptions.royalFlush,
        straightFlush: prevState.CUOptions.straightFlush,
        fourOfKind: prevState.CUOptions.fourOfKind,
        fullHouse: prevState.CUOptions.fullHouse,
        flush: prevState.CUOptions.flush,
        streigh: prevState.CUOptions.streigh,
        threeOfAKind: prevState.CUOptions.threeOfAKind,
        twoPairs: true,
        onePair: prevState.CUOptions.onePair,
        hightCard: prevState.CUOptions.hightCard
      },
      highCCard: CUonePair}))}
  }

  checkIfThree = () => {
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
      if (hand == tableAndPlayerHand[id + 1] && hand == tableAndPlayerHand[id + 2]) {this.setState(prevState => ({playerOptions:
        {
          royalFlush: prevState.playerOptions.royalFlush,
          straightFlush: prevState.playerOptions.straightFlush,
          fourOfKind: prevState.playerOptions.fourOfKind,
          fullHouse: prevState.playerOptions.fullHouse,
          flush: prevState.playerOptions.flush,
          streigh: prevState.playerOptions.streigh,
          threeOfAKind: true,
          twoPairs: prevState.playerOptions.twoPairs,
          onePair: prevState.playerOptions.onePair,
          hightCard: prevState.playerOptions.hightCard
        },
        highPCard: hand}))}})

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    tableAndCUHand.sort(this.compareNumbers)
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1] && hand == tableAndCUHand[id + 2]) {this.setState(prevState => ({CUOptions:
        {
          royalFlush: prevState.CUOptions.royalFlush,
          straightFlush: prevState.CUOptions.straightFlush,
          fourOfKind: prevState.CUOptions.fourOfKind,
          fullHouse: prevState.CUOptions.fullHouse,
          flush: prevState.CUOptions.flush,
          streigh: prevState.CUOptions.streigh,
          threeOfAKind: true,
          twoPairs: prevState.CUOptions.twoPairs,
          onePair: prevState.CUOptions.onePair,
          hightCard: prevState.CUOptions.hightCard
        },
        highCCard: hand}))}})
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
      if (tableAndPlayerHand[6] - 4 == tableAndPlayerHand[2]) {this.setState(prevState => ({playerOptions:
          {
            royalFlush: prevState.playerOptions.royalFlush,
            straightFlush: prevState.playerOptions.straightFlush,
            fourOfKind: prevState.playerOptions.fourOfKind,
            fullHouse: prevState.playerOptions.fullHouse,
            flush: prevState.playerOptions.flush,
            streigh: true,
            threeOfAKind: prevState.playerOptions.threeOfAKind,
            twoPairs: prevState.playerOptions.twoPairs,
            onePair: prevState.playerOptions.onePair,
            hightCard: prevState.playerOptions.hightCard
          },
          highPCard: tableAndPlayerHand[6]}))
      } else if (tableAndPlayerHand[5] - 4 == tableAndPlayerHand[1]) {this.setState(prevState => ({playerOptions:
        {
          royalFlush: prevState.playerOptions.royalFlush,
          straightFlush: prevState.playerOptions.straightFlush,
          fourOfKind: prevState.playerOptions.fourOfKind,
          fullHouse: prevState.playerOptions.fullHouse,
          flush: prevState.playerOptions.flush,
          streigh: true,
          threeOfAKind: prevState.playerOptions.threeOfAKind,
          twoPairs: prevState.playerOptions.twoPairs,
          onePair: prevState.playerOptions.onePair,
          hightCard: prevState.playerOptions.hightCard
        },
        highPCard: tableAndPlayerHand[5]}))
      } else if (tableAndPlayerHand[4] - 4 == tableAndPlayerHand[0]) {this.setState(prevState => ({playerOptions:
        {
          royalFlush: prevState.playerOptions.royalFlush,
          straightFlush: prevState.playerOptions.straightFlush,
          fourOfKind: prevState.playerOptions.fourOfKind,
          fullHouse: prevState.playerOptions.fullHouse,
          flush: prevState.playerOptions.flush,
          streigh: true,
          threeOfAKind: prevState.playerOptions.threeOfAKind,
          twoPairs: prevState.playerOptions.twoPairs,
          onePair: prevState.playerOptions.onePair,
          hightCard: prevState.playerOptions.hightCard
        },
        highPCard: tableAndPlayerHand[4]}))}
    }

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    tableAndCUHand.sort(this.compareNumbers)
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1] && hand == tableAndCUHand[id + 2] && hand == tableAndCUHand[id + 3]) {
        tableAndCUHand.splice(id, 3)
      } else if (hand == tableAndCUHand[id + 1] && hand == tableAndCUHand[id + 2]) {
        tableAndCUHand.splice(id, 2)
      } else if (hand == tableAndCUHand[id + 1]) {
        tableAndCUHand.splice(id, 1)}
    })
    if (tableAndCUHand.length >= 5) {
      if (tableAndCUHand[6] - 4 == tableAndCUHand[2]) {this.setState(prevState => ({CUOptions:
          {
            royalFlush: prevState.CUOptions.royalFlush,
            straightFlush: prevState.CUOptions.straightFlush,
            fourOfKind: prevState.CUOptions.fourOfKind,
            fullHouse: prevState.CUOptions.fullHouse,
            flush: prevState.CUOptions.flush,
            streigh: true,
            threeOfAKind: prevState.CUOptions.threeOfAKind,
            twoPairs: prevState.CUOptions.twoPairs,
            onePair: prevState.CUOptions.onePair,
            hightCard: prevState.CUOptions.hightCard
          },
          highCCard: tableAndCUHand[6]}))
      } else if (tableAndCUHand[5] - 4 == tableAndCUHand[1]) {this.setState(prevState => ({CUOptions:
        {
          royalFlush: prevState.CUOptions.royalFlush,
          straightFlush: prevState.CUOptions.straightFlush,
          fourOfKind: prevState.CUOptions.fourOfKind,
          fullHouse: prevState.CUOptions.fullHouse,
          flush: prevState.CUOptions.flush,
          streigh: true,
          threeOfAKind: prevState.CUOptions.threeOfAKind,
          twoPairs: prevState.CUOptions.twoPairs,
          onePair: prevState.CUOptions.onePair,
          hightCard: prevState.CUOptions.hightCard
        },
        highCCard: tableAndCUHand[5]}))
      } else if (tableAndCUHand[4] - 4 == tableAndCUHand[0]) {this.setState(prevState => ({CUOptions:
        {
          royalFlush: prevState.CUOptions.royalFlush,
          straightFlush: prevState.CUOptions.straightFlush,
          fourOfKind: prevState.CUOptions.fourOfKind,
          fullHouse: prevState.CUOptions.fullHouse,
          flush: prevState.CUOptions.flush,
          streigh: true,
          threeOfAKind: prevState.CUOptions.threeOfAKind,
          twoPairs: prevState.CUOptions.twoPairs,
          onePair: prevState.CUOptions.onePair,
          hightCard: prevState.CUOptions.hightCard
        },
        highCCard: tableAndCUHand[4]}))}
    }
  }

  checkIfFlush = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand)
    })
    tableAndPlayerHand.sort(this.compareNumbersInObject)
    let hearts = 0
    let clubs = 0
    let diamonds = 0
    let spades = 0
    tableAndPlayerHand.forEach(hand => {
      if (hand.color === 'heart') {hearts++}
      else if (hand.color === 'diamond') {diamonds++}
      else if (hand.color === 'club') {clubs++}
      else {spades++}
    })
    let tableAndPlayerHandFilter
    if (hearts >=5 || diamonds >=5 || clubs >=5 || spades >=5) {this.setState(prevState => ({playerOptions:
      {
        royalFlush: prevState.playerOptions.royalFlush,
        straightFlush: prevState.playerOptions.straightFlush,
        fourOfKind: prevState.playerOptions.fourOfKind,
        fullHouse: prevState.playerOptions.fullHouse,
        flush: true,
        streigh: prevState.playerOptions.streigh,
        threeOfAKind: prevState.playerOptions.threeOfAKind,
        twoPairs: prevState.playerOptions.twoPairs,
        onePair: prevState.playerOptions.onePair,
        hightCard: prevState.playerOptions.hightCard
      }}))
      if (hearts >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'heart')
      } else if (clubs >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'club')
      } else if (diamonds >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'diamond')
      } else if (spades >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'spade')}
      if (hearts ==7 || diamonds ==7 || clubs ==7 || spades ==7) {this.setState({highPCard: tableAndPlayerHandFilter[6].number})}
      else if (hearts ==6 || diamonds ==6 || clubs ==6 || spades ==6) {this.setState({highPCard: tableAndPlayerHandFilter[5].number})}
      else if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState({highPCard: tableAndPlayerHandFilter[4].number})}
  }
  

  const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand)
    })
    tableAndCUHand.sort(this.compareNumbersInObject)
    let Chearts = 0
    let Cclubs = 0
    let Cdiamonds = 0
    let Cspades = 0
    tableAndCUHand.forEach(hand => {
      if (hand.color === 'heart') {Chearts++}
      else if (hand.color === 'diamond') {Cdiamonds++}
      else if (hand.color === 'club') {Cclubs++}
      else {Cspades++}
    })
    let tableAndCUHandFilter
    if (Chearts >=5 || Cdiamonds >=5 || Cclubs >=5 || Cspades >=5) {this.setState(prevState => ({CUOptions:
      {
        royalFlush: prevState.CUOptions.royalFlush,
        straightFlush: prevState.CUOptions.straightFlush,
        fourOfKind: prevState.CUOptions.fourOfKind,
        fullHouse: prevState.CUOptions.fullHouse,
        flush: true,
        streigh: prevState.CUOptions.streigh,
        threeOfAKind: prevState.CUOptions.threeOfAKind,
        twoPairs: prevState.CUOptions.twoPairs,
        onePair: prevState.CUOptions.onePair,
        hightCard: prevState.CUOptions.hightCard
      }}))}
      if (Chearts >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'heart')
      } else if (Cclubs >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'club')
      } else if (Cdiamonds >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'diamond')
      } else if (Cspades >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'spade')}
      if (Chearts ==7 || Cdiamonds ==7 || Cclubs ==7 || Cspades ==7) {this.setState({highCCard: tableAndCUHandFilter[6].number})}
      else if (Chearts ==6 || Cdiamonds ==6 || Cclubs ==6 || Cspades ==6) {this.setState({highCCard: tableAndCUHandFilter[5].number})}
      else if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState({highCCard: tableAndCUHandFilter[4].number})}
  }

  checkIfFullHouse = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand.number)
    })
    tableAndPlayerHand.sort(this.compareNumbers)
    let pNext = false
    let pNumber
    tableAndPlayerHand.forEach((hand, id) => {
      if (hand == tableAndPlayerHand[id + 1] && hand == tableAndPlayerHand[id + 2]) {pNumber = hand; tableAndPlayerHand.splice(id, 3); pNext = true}
    })
    if (pNext) {
    tableAndPlayerHand.forEach((hand, id) => {
      if (hand == tableAndPlayerHand[id + 1]) {this.setState(prevState => ({playerOptions:
        {
          royalFlush: prevState.playerOptions.royalFlush,
          straightFlush: prevState.playerOptions.straightFlush,
          fourOfKind: prevState.playerOptions.fourOfKind,
          fullHouse: true,
          flush: prevState.playerOptions.flush,
          streigh: prevState.playerOptions.streigh,
          threeOfAKind: prevState.playerOptions.threeOfAKind,
          twoPairs: prevState.playerOptions.twoPairs,
          onePair: prevState.playerOptions.onePair,
          hightCard: prevState.playerOptions.hightCard
        },
          highPCard: pNumber}))}})}

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    tableAndCUHand.sort(this.compareNumbers)
    let cNext = false
    let cNumber
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1] && hand == tableAndCUHand[id + 2]) {cNumber = hand; tableAndCUHand.splice(id, 3); cNext = true}
    })
    if (cNext) {
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1]) {this.setState(prevState => ({CUOptions:
        {
          royalFlush: prevState.CUOptions.royalFlush,
          straightFlush: prevState.CUOptions.straightFlush,
          fourOfKind: prevState.CUOptions.fourOfKind,
          fullHouse: true,
          flush: prevState.CUOptions.flush,
          streigh: prevState.CUOptions.streigh,
          threeOfAKind: prevState.CUOptions.threeOfAKind,
          twoPairs: prevState.CUOptions.twoPairs,
          onePair: prevState.CUOptions.onePair,
          hightCard: prevState.CUOptions.hightCard
        },
          highCCard: cNumber}))}})}
        }

  checkIfStraightFlush = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand)
    })
    tableAndPlayerHand.sort(this.compareNumbersInObject)
    tableAndPlayerHand.forEach((hand, id) => {
      if (id <= (tableAndPlayerHand.length - 4) && hand.number == tableAndPlayerHand[id + 1].number && hand.number == tableAndPlayerHand[id + 2].number && hand.number == tableAndPlayerHand[id + 3].number) {
        tableAndPlayerHand.splice(id, 3)
      } else if (id <= (tableAndPlayerHand.length - 3) && hand.number == tableAndPlayerHand[id + 1].number && hand.number == tableAndPlayerHand[id + 2].number) {
        tableAndPlayerHand.splice(id, 2)
      } else if (id <= (tableAndPlayerHand.length - 2) && hand.number == tableAndPlayerHand[id + 1].number) {
        tableAndPlayerHand.splice(id, 1)}
    })
    let hearts = 0
    let clubs = 0
    let diamonds = 0
    let spades = 0
    
    let tableAndPlayerHandFilter = []
    if (tableAndPlayerHand.length >= 5) {
      tableAndPlayerHand.forEach(hand => {
        if (hand.color === 'heart') {hearts++}
        else if (hand.color === 'diamond') {diamonds++}
        else if (hand.color === 'club') {clubs++}
        else {spades++}})
        if (hearts >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'heart')
      } else if (clubs >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'club')
      } else if (diamonds >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'diamond')
      } else if (spades >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'spade')}
      if (tableAndPlayerHandFilter.length == 7 && tableAndPlayerHandFilter[6].number - 4 == tableAndPlayerHandFilter[2].number) {
            this.setState(prevState => ({playerOptions:
            {
              royalFlush: prevState.playerOptions.royalFlush,
              straightFlush: true,
              fourOfKind: prevState.playerOptions.fourOfKind,
              fullHouse: prevState.playerOptions.fullHouse,
              flush: prevState.playerOptions.flush,
              streigh: prevState.playerOptions.streigh,
              threeOfAKind: prevState.playerOptions.threeOfAKind,
              twoPairs: prevState.playerOptions.twoPairs,
              onePair: prevState.playerOptions.onePair,
              hightCard: prevState.playerOptions.hightCard
            },
              highPCard: tableAndPlayerHandFilter[6].number}))
      } else if (tableAndPlayerHandFilter.length >= 6 && tableAndPlayerHandFilter[5].number - 4 == tableAndPlayerHandFilter[1].number) {
          this.setState(prevState => ({playerOptions:
            {
              royalFlush: prevState.playerOptions.royalFlush,
              straightFlush: true,
              fourOfKind: prevState.playerOptions.fourOfKind,
              fullHouse: prevState.playerOptions.fullHouse,
              flush: prevState.playerOptions.flush,
              streigh: prevState.playerOptions.streigh,
              threeOfAKind: prevState.playerOptions.threeOfAKind,
              twoPairs: prevState.playerOptions.twoPairs,
              onePair: prevState.playerOptions.onePair,
              hightCard: prevState.playerOptions.hightCard
            },
              highPCard: tableAndPlayerHandFilter[5].number}))
      } else if (tableAndPlayerHandFilter.length >= 5 && tableAndPlayerHandFilter[4].number - 4 == tableAndPlayerHandFilter[0].number) {
          this.setState(prevState => ({playerOptions:
            {
              royalFlush: prevState.playerOptions.royalFlush,
              straightFlush: true,
              fourOfKind: prevState.playerOptions.fourOfKind,
              fullHouse: prevState.playerOptions.fullHouse,
              flush: prevState.playerOptions.flush,
              streigh: prevState.playerOptions.streigh,
              threeOfAKind: prevState.playerOptions.threeOfAKind,
              twoPairs: prevState.playerOptions.twoPairs,
              onePair: prevState.playerOptions.onePair,
              hightCard: prevState.playerOptions.hightCard
            },
              highPCard: tableAndPlayerHandFilter[4].number}))
            } 
      }

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand)
    })
    tableAndCUHand.sort(this.compareNumbersInObject)
    tableAndCUHand.forEach((hand, id) => {
      if (id <= (tableAndCUHand.length - 4) && hand.number == tableAndCUHand[id + 1].number && hand.number == tableAndCUHand[id + 2].number && hand.number == tableAndCUHand[id + 3].number) {
        tableAndCUHand.splice(id, 3)
      } else if (id <= (tableAndCUHand.length - 3) && hand.number == tableAndCUHand[id + 1].number && hand.number == tableAndCUHand[id + 2].number) {
        tableAndCUHand.splice(id, 2)
      } else if (id <= (tableAndCUHand.length - 2) && hand.number == tableAndCUHand[id + 1].number) {
        tableAndCUHand.splice(id, 1)}
    })
    let Chearts = 0
    let Cclubs = 0
    let Cdiamonds = 0
    let Cspades = 0
    let tableAndCUHandFilter = []
    if (tableAndCUHand.length >= 5) {
      tableAndCUHand.forEach(hand => {
        if (hand.color === 'heart') {Chearts++}
        else if (hand.color === 'diamond') {Cdiamonds++}
        else if (hand.color === 'club') {Cclubs++}
        else {Cspades++}})
        if (Chearts >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'heart')
      } else if (Cclubs >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'club')
      } else if (Cdiamonds >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'diamond')
      } else if (Cspades >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'spade')}
      if (tableAndCUHandFilter.length == 7 && tableAndCUHandFilter[6].number - 4 == tableAndCUHandFilter[2].number) {
          this.setState(prevState => ({CUOptions:
            {
              royalFlush: prevState.CUOptions.royalFlush,
              straightFlush: true,
              fourOfKind: prevState.CUOptions.fourOfKind,
              fullHouse: prevState.CUOptions.fullHouse,
              flush: prevState.CUOptions.flush,
              streigh: prevState.CUOptions.streigh,
              threeOfAKind: prevState.CUOptions.threeOfAKind,
              twoPairs: prevState.CUOptions.twoPairs,
              onePair: prevState.CUOptions.onePair,
              hightCard: prevState.CUOptions.hightCard
            },
            highCCard: tableAndCUHandFilter[6].number}))
      } else if (tableAndCUHandFilter.length >= 6 && tableAndCUHandFilter[5].number - 4 == tableAndCUHandFilter[1].number) {
        this.setState(prevState => ({CUOptions:
            {
              royalFlush: prevState.CUOptions.royalFlush,
              straightFlush: true,
              fourOfKind: prevState.CUOptions.fourOfKind,
              fullHouse: prevState.CUOptions.fullHouse,
              flush: prevState.CUOptions.flush,
              streigh: prevState.CUOptions.streigh,
              threeOfAKind: prevState.CUOptions.threeOfAKind,
              twoPairs: prevState.CUOptions.twoPairs,
              onePair: prevState.CUOptions.onePair,
              hightCard: prevState.CUOptions.hightCard
            },
            highCCard: tableAndCUHandFilter[5].number}))
      } else if (tableAndCUHandFilter.length >= 5 && tableAndCUHandFilter[4].number - 4 == tableAndCUHandFilter[0].number) {
        this.setState(prevState => ({CUOptions:
            {
              royalFlush: prevState.CUOptions.royalFlush,
              straightFlush: true,
              fourOfKind: prevState.CUOptions.fourOfKind,
              fullHouse: prevState.CUOptions.fullHouse,
              flush: prevState.CUOptions.flush,
              streigh: prevState.CUOptions.streigh,
              threeOfAKind: prevState.CUOptions.threeOfAKind,
              twoPairs: prevState.CUOptions.twoPairs,
              onePair: prevState.CUOptions.onePair,
              hightCard: prevState.CUOptions.hightCard
            },
            highCCard: tableAndCUHandFilter[4].number}))}}
  }
  
  checkIfFour = () => {
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
      if (hand == tableAndPlayerHand[id + 1] && hand == tableAndPlayerHand[id + 2] && hand == tableAndPlayerHand[id + 3]) {this.setState(prevState => ({playerOptions:
        {
          royalFlush: prevState.playerOptions.royalFlush,
          straightFlush: prevState.playerOptions.straightFlush,
          fourOfKind: true,
          fullHouse: prevState.playerOptions.fullHouse,
          flush: prevState.playerOptions.flush,
          streigh: prevState.playerOptions.streigh,
          threeOfAKind: prevState.playerOptions.threeOfAKind,
          twoPairs: prevState.playerOptions.twoPairs,
          onePair: prevState.playerOptions.onePair,
          hightCard: prevState.playerOptions.hightCard
        },
        highPCard: hand}))}})

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    tableAndCUHand.sort(this.compareNumbers)
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1] && hand == tableAndCUHand[id + 2] && hand == tableAndCUHand[id + 3]) {this.setState(prevState => ({CUOptions:
        {
          royalFlush: prevState.CUOptions.royalFlush,
          straightFlush: prevState.CUOptions.straightFlush,
          fourOfKind: true,
          fullHouse: prevState.CUOptions.fullHouse,
          flush: prevState.CUOptions.flush,
          streigh: prevState.CUOptions.streigh,
          threeOfAKind: prevState.CUOptions.threeOfAKind,
          twoPairs: prevState.CUOptions.twoPairs,
          onePair: prevState.CUOptions.onePair,
          hightCard: prevState.CUOptions.hightCard
        },
        highCCard: hand}))}})
  }

  checkIfRoyalFlush = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand)
    })
    tableAndPlayerHand.sort(this.compareNumbersInObject)   
    tableAndPlayerHand.forEach((hand, id) => {
      if (id <= (tableAndPlayerHand.length - 4) && hand.number == tableAndPlayerHand[id + 1].number && hand.number == tableAndPlayerHand[id + 2].number && hand.number == tableAndPlayerHand[id + 3].number) {
        tableAndPlayerHand.splice(id, 3)
      } else if (id <= (tableAndPlayerHand.length - 3) && hand.number == tableAndPlayerHand[id + 1].number && hand.number == tableAndPlayerHand[id + 2].number) {
        tableAndPlayerHand.splice(id, 2)
      } else if (id <= (tableAndPlayerHand.length - 2) && hand.number == tableAndPlayerHand[id + 1].number) {
        tableAndPlayerHand.splice(id, 1)}
    })
    let hearts = 0
    let clubs = 0
    let diamonds = 0
    let spades = 0
    let tableAndPlayerHandFilter = []
    if (tableAndPlayerHand.length >= 5) {
      tableAndPlayerHand.forEach(hand => {
        if (hand.color === 'heart') {hearts++}
        else if (hand.color === 'diamond') {diamonds++}
        else if (hand.color === 'club') {clubs++}
        else {spades++}})
        if (hearts >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'heart')
      } else if (clubs >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'club')
      } else if (diamonds >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'diamond')
      } else if (spades >=5) {tableAndPlayerHandFilter = tableAndPlayerHand.filter(hand => hand.color === 'spade')}
      if (tableAndPlayerHandFilter.length == 7 && tableAndPlayerHandFilter[6].number - 4 == tableAndPlayerHandFilter[2].number && tableAndPlayerHandFilter[6].number == 14) {
          this.setState(prevState => ({playerOptions:
            {
              royalFlush: true,
              straightFlush: prevState.playerOptions.straightFlush,
              fourOfKind: prevState.playerOptions.fourOfKind,
              fullHouse: prevState.playerOptions.fullHouse,
              flush: prevState.playerOptions.flush,
              streigh: prevState.playerOptions.streigh,
              threeOfAKind: prevState.playerOptions.threeOfAKind,
              twoPairs: prevState.playerOptions.twoPairs,
              onePair: prevState.playerOptions.onePair,
              hightCard: prevState.playerOptions.hightCard
            },
            highPCard: tableAndPlayerHandFilter[6].number}))
      } else if (tableAndPlayerHandFilter.length >= 6 && tableAndPlayerHandFilter[5].number - 4 == tableAndPlayerHandFilter[1].number && tableAndPlayerHandFilter[5].number == 14) {
        this.setState(prevState => ({playerOptions:
            {
              royalFlush: true,
              straightFlush: prevState.playerOptions.straightFlush,
              fourOfKind: prevState.playerOptions.fourOfKind,
              fullHouse: prevState.playerOptions.fullHouse,
              flush: prevState.playerOptions.flush,
              streigh: prevState.playerOptions.streigh,
              threeOfAKind: prevState.playerOptions.threeOfAKind,
              twoPairs: prevState.playerOptions.twoPairs,
              onePair: prevState.playerOptions.onePair,
              hightCard: prevState.playerOptions.hightCard
            },
            highPCard: tableAndPlayerHandFilter[5].number}))
      } else if (tableAndPlayerHandFilter.length >= 5 && tableAndPlayerHandFilter[4].number - 4 == tableAndPlayerHandFilter[0].number && tableAndPlayerHandFilter[4].number == 14) {
        this.setState(prevState => ({playerOptions:
            {
              royalFlush: true,
              straightFlush: prevState.playerOptions.straightFlush,
              fourOfKind: prevState.playerOptions.fourOfKind,
              fullHouse: prevState.playerOptions.fullHouse,
              flush: prevState.playerOptions.flush,
              streigh: prevState.playerOptions.streigh,
              threeOfAKind: prevState.playerOptions.threeOfAKind,
              twoPairs: prevState.playerOptions.twoPairs,
              onePair: prevState.playerOptions.onePair,
              hightCard: prevState.playerOptions.hightCard
            },
            highPCard: tableAndPlayerHandFilter[4].number}))
      }
    }

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand)
    })
    tableAndCUHand.sort(this.compareNumbersInObject)
    tableAndCUHand.forEach((hand, id) => {
      if (id <= (tableAndCUHand.length - 4) && hand.number == tableAndCUHand[id + 1].number && hand.number == tableAndCUHand[id + 2].number && hand.number == tableAndCUHand[id + 3].number) {
        tableAndCUHand.splice(id, 3)
      } else if (id <= (tableAndCUHand.length - 3) && hand.number == tableAndCUHand[id + 1].number && hand.number == tableAndCUHand[id + 2].number) {
        tableAndCUHand.splice(id, 2)
      } else if (id <= (tableAndCUHand.length - 2) && hand.number == tableAndCUHand[id + 1].number) {
        tableAndCUHand.splice(id, 1)}
    })
    
    let Chearts = 0
    let Cclubs = 0
    let Cdiamonds = 0
    let Cspades = 0
    let tableAndCUHandFilter = []
    if (tableAndCUHand.length >= 5) {
      tableAndCUHand.forEach(hand => {
        if (hand.color === 'heart') {Chearts++}
        else if (hand.color === 'diamond') {Cdiamonds++}
        else if (hand.color === 'club') {Cclubs++}
        else {Cspades++}})
        if (Chearts >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'heart')
      } else if (Cclubs >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'club')
      } else if (Cdiamonds >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'diamond')
      } else if (Cspades >=5) {tableAndCUHandFilter = tableAndCUHand.filter(hand => hand.color === 'spade')}
      if (tableAndCUHandFilter.length == 7 && tableAndCUHandFilter[6].number - 4 == tableAndCUHandFilter[2].number && tableAndCUHandFilter[6].number == 14) {
          this.setState(prevState => ({CUOptions:
            {
              royalFlush: true,
              straightFlush: prevState.CUOptions.straightFlush,
              fourOfKind: prevState.CUOptions.fourOfKind,
              fullHouse: prevState.CUOptions.fullHouse,
              flush: prevState.CUOptions.flush,
              streigh: prevState.CUOptions.streigh,
              threeOfAKind: prevState.CUOptions.threeOfAKind,
              twoPairs: prevState.CUOptions.twoPairs,
              onePair: prevState.CUOptions.onePair,
              hightCard: prevState.CUOptions.hightCard
            },
            highCCard: tableAndCUHandFilter[6].number}))
      } else if (tableAndCUHandFilter.length >= 6 && tableAndCUHandFilter[5].number - 4 == tableAndCUHandFilter[1].number && tableAndCUHandFilter[5].number == 14) {
        this.setState(prevState => ({CUOptions:
            {
              royalFlush: true,
              straightFlush: prevState.CUOptions.straightFlush,
              fourOfKind: prevState.CUOptions.fourOfKind,
              fullHouse: prevState.CUOptions.fullHouse,
              flush: prevState.CUOptions.flush,
              streigh: prevState.CUOptions.streigh,
              threeOfAKind: prevState.CUOptions.threeOfAKind,
              twoPairs: prevState.CUOptions.twoPairs,
              onePair: prevState.CUOptions.onePair,
              hightCard: prevState.CUOptions.hightCard
            },
            highCCard: tableAndCUHandFilter[5].number}))
      } else if (tableAndCUHandFilter.length >= 5 && tableAndCUHandFilter[4].number - 4 == tableAndCUHandFilter[0].number && tableAndCUHandFilter[4].number == 14) {
        this.setState(prevState => ({CUOptions:
            {
              royalFlush: true,
              straightFlush: prevState.CUOptions.straightFlush,
              fourOfKind: prevState.CUOptions.fourOfKind,
              fullHouse: prevState.CUOptions.fullHouse,
              flush: prevState.CUOptions.flush,
              streigh: prevState.CUOptions.streigh,
              threeOfAKind: prevState.CUOptions.threeOfAKind,
              twoPairs: prevState.CUOptions.twoPairs,
              onePair: prevState.CUOptions.onePair,
              hightCard: prevState.CUOptions.hightCard
            },
            highCCard: tableAndCUHandFilter[4].number}))}}
  }

  getPlayersCards = () => {
    const cards = this.state.cards
    const playerHand = this.state.playerHand
    if (playerHand.length == 2) {
      cards.push(this.state.playerHand[0])
      cards.push(this.state.playerHand[1])
      playerHand.splice(0,2)
    }
    const getRandomOne = Math.floor(Math.random()*cards.length)
    playerHand.push(cards[getRandomOne])
    cards.splice(getRandomOne, 1)
    const getRandomTwo = Math.floor(Math.random()*cards.length)
    playerHand.push(cards[getRandomTwo])
    cards.splice(getRandomTwo, 1)
    this.setState({
      cards,
      playerHand
    })
  }

  getAICards = () => {
    const cards = this.state.cards
    const AIHand = this.state.AIHand
    if (AIHand.length == 2) {
      cards.push(this.state.AIHand[0])
      cards.push(this.state.AIHand[1])
      AIHand.splice(0,2)
    }
    const getRandomOne = Math.floor(Math.random()*cards.length)
    AIHand.push(cards[getRandomOne])
    cards.splice(getRandomOne, 1)
    const getRandomTwo = Math.floor(Math.random()*cards.length)
    AIHand.push(cards[getRandomTwo])
    cards.splice(getRandomTwo, 1)
    this.setState({
      cards,
      AIHand
    })
  }

  getTableCards = () => {
    const cards = this.state.cards
    const tableHand = this.state.tableHand
    if (tableHand.length == 0) {
    const getRandomOne = Math.floor(Math.random()*cards.length)
    tableHand.push(cards[getRandomOne])
    cards.splice(getRandomOne, 1)
    const getRandomTwo = Math.floor(Math.random()*cards.length)
    tableHand.push(cards[getRandomTwo])
    cards.splice(getRandomTwo, 1)
    const getRandomThree = Math.floor(Math.random()*cards.length)
    tableHand.push(cards[getRandomThree])
    cards.splice(getRandomThree, 1)
    this.setState({
      cards,
      tableHand
    })
    } else if (tableHand.length == 3) {
      const getRandomFour = Math.floor(Math.random()*cards.length)
      tableHand.push(cards[getRandomFour])
      cards.splice(getRandomFour, 1)
      this.setState({
        cards,
        tableHand
      })
      } else if (tableHand.length == 4) {
        const getRandomFive = Math.floor(Math.random()*cards.length)
        tableHand.push(cards[getRandomFive])
        cards.splice(getRandomFive, 1)
        this.setState({
          cards,
          tableHand
        })
        } else if (tableHand.length == 5) {
          tableHand.forEach(hand => {
            cards.push(hand)
          })
          tableHand.splice(0, 5)
          this.setState({
            cards,
            tableHand
          })
          }
  }

  playerCHECK = () => {
    const playerBID = this.state.playerBID
    const cuBID = this.state.cuBID
    let playerPlayed = this.state.playerPlayed
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 1) {
    if (playerBID == cuBID) {
      playerPlayed = true
    this.setState(prevState => ({
      playerBID: prevState.playerBID,
      playerMoney: prevState.playerMoney,
      turn: 2,
      playerPlayed
    }))
    
    console.log('Gracz: CHECK');
    console.log(playerPlayed);
    console.log(cuPlayed);
    if (playerPlayed && cuPlayed) {
      this.getToNext()
    }
  } else {console.log('NIE MOŻESZ');
  }} else console.log('NIE TWOJA TURA');
  
}

  playerCALL = () => {
    const cuBID = this.state.cuBID
    const playerBID = this.state.playerBID
    const difference = cuBID - playerBID
    const playerMoney = this.state.playerMoney
    let playerPlayed = this.state.playerPlayed
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 1) {
    if (cuBID > playerBID) {
      if ((playerMoney + playerBID) > cuBID) {
        playerPlayed = true
        this.setState(prevState => ({
          playerBID: prevState.playerBID + difference,
          playerMoney: prevState.playerMoney - difference,
          turn: 2,
          playerPlayed
        }))
        console.log('Gracz: CALL');
      if (playerPlayed && cuPlayed) {
      this.getToNext()
    }
      } else {console.log('MASZ ZA MAŁO PIENIĘDZY!');
      }
    } else {console.log('NIE MOŻESZ');
    }
  } else console.log('NIE TWOJA TURA');
}

  playerALLIN = () => {
    const cuBID = this.state.cuBID
    const playerMoney = this.state.playerMoney
    const playerBID = this.state.playerBID
    let playerPlayed = this.state.playerPlayed
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 1) {
      playerPlayed = true
    this.setState(prevState => ({
      playerBID: prevState.playerBID + playerMoney,
      playerMoney: 0,
      turn: 2,
      playerPlayed
    }))
    if (playerPlayed && cuPlayed && (playerMoney + playerBID <= cuBID)) {
      this.getToNext()
      setTimeout(() => {this.playerCHECK()}, 1000)
      setTimeout(() => {this.cuCHECK()}, 2000)
    }}
    console.log('Gracz: ALLIN');
  }

  playerRAISE = () => {
    const raise = this.state.playerRaise
    const playerMoney = this.state.playerMoney
    const cuBID = this.state.cuBID
    const playerBID = this.state.playerBID
    const difference = cuBID - playerBID
    let playerPlayed = this.state.playerPlayed
    if (this.state.turn == 1) {
    if (raise >= 1 && raise <= playerMoney && raise > difference && !raise.includes('e')) {
      let number = parseInt(raise);
      playerPlayed = true
      this.setState(prevState => ({
        playerMoney: prevState.playerMoney - number,
        playerBID: prevState.playerBID + number,
        playerRaise: 0,
        turn: 2,
        playerPlayed
      }))
    } else console.log('nie działa');
  } else console.log('NIE TWOJA TURA');
  
  }
  
  cuCHECK = () => {
    const playerBID = this.state.playerBID
    const cuBID = this.state.cuBID
    let playerPlayed = this.state.playerPlayed
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 2) {
    if (playerBID == cuBID) {
      cuPlayed = true
    this.setState(prevState => ({
      cuBID: prevState.cuBID,
      cuMoney: prevState.cuMoney,
      turn: 1,
      cuPlayed
    }))
    console.log('CU: CHECK');
    console.log(playerPlayed);
    console.log(cuPlayed);
    if (playerPlayed && cuPlayed) {
      this.getToNext()
    }
  } else {console.log('NIE MOŻESZ');
  }} else console.log('NIE TWOJA TURA')
}

  cuCALL = () => {
    const cuBID = this.state.cuBID
    const playerBID = this.state.playerBID
    const difference = playerBID - cuBID
    const cuMoney = this.state.cuMoney
    let playerPlayed = this.state.playerPlayed
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 2) {
    if (playerBID > cuBID) {
      if ((cuMoney + cuBID) > playerBID) {
        cuPlayed = true
        this.setState(prevState => ({
          cuBID: prevState.cuBID + difference,
          cuMoney: prevState.cuMoney - difference,
          turn: 1,
          cuPlayed
        }))
        console.log('CU: CALL');
        console.log(playerPlayed);
        console.log(cuPlayed);
        if (playerPlayed && cuPlayed) {
          this.getToNext()
        }
      } else {console.log('MASZ ZA MAŁO PIENIĘDZY!');
      }
    } else {console.log('NIE MOŻESZ');
    }
  } else console.log('NIE TWOJA TURA');
  
}

  cuALLIN = () => {
    const playerBID = this.state.playerBID
    const cuMoney = this.state.cuMoney
    const cuBID = this.state.cuBID
    let playerPlayed = this.state.playerPlayed
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 2) {
      cuPlayed = true
    this.setState(prevState => ({
      cuBID: prevState.cuBID + cuMoney,
      cuMoney: 0,
      turn: 1,
      cuPlayed
    }))
    if (playerPlayed && cuPlayed && (cuMoney + cuBID <= playerBID)) {
      this.getToNext()
      setTimeout(() => {this.playerCHECK()}, 1000)
      setTimeout(() => {this.cuCHECK()}, 2000)
    }}
    console.log('CU: ALLIN');
  }

  cuRAISE = () => {
    const raise = this.state.cuRaise
    const cuMoney = this.state.cuMoney
    const playerBID = this.state.playerBID
    const cuBID = this.state.cuBID
    const difference = playerBID - cuBID
    let cuPlayed = this.state.cuPlayed
    if (this.state.turn == 2) {
    if (raise >= 1 && raise <= cuMoney && raise > difference && !raise.includes('e')) {
      let number = parseInt(raise);
      cuPlayed = true
      this.setState(prevState => ({
        cuMoney: prevState.cuMoney - number,
        cuBID: prevState.cuBID + number,
        cuRaise: 0,
        turn: 1,
        cuPlayed
      }))
    } else console.log('nie działa');
  } else console.log('NIE TWOJA TURA');
  
}

  render() { 
    return ( 
    <div className="game_area">
      <button onClick={this.getPlayersCards}>SPRAWDŹ</button>
      <button onClick={this.getTableCards}>SPRAWDŹ2</button>
      <button onClick={this.getAICards}>SPRAWDŹ3</button>
      {/* <button onClick={this.checkOptions}>SPRAWDŹ4</button> */}
      <button onClick={this.checkState}>SPRAWDŹ5</button> 
      <button onClick={this.play}>PLAY</button> 
      <CU cards={this.state.AIHand} options={this.state.CUOptions} money={this.state.cuMoney} check={this.cuCHECK} call={this.cuCALL} allin={this.cuALLIN} raise={this.cuRAISE} cuRaiseValue={this.state.cuRaise} handleRChange={this.handleRChange}/>

      <Table cards={this.state.tableHand} pOptions={this.state.playerOptions} cOptions={this.state.CUOptions} highPCard={this.state.highPCard} highCCard={this.state.highCCard} playerBID={this.state.playerBID} cuBID={this.state.cuBID} allBID={this.state.allBID} playerRaiseValue={this.state.playerRaise} whoWin={this.state.whoWin}/>

      <Player cards={this.state.playerHand} options={this.state.playerOptions} money={this.state.playerMoney} check={this.playerCHECK} call={this.playerCALL} allin={this.playerALLIN} raise={this.playerRAISE} playerRaiseValue={this.state.playerRaise} handleRChange={this.handleRChange}/>
    </div>
   );
  }
}
 
export default App;
