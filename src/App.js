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
      {number: 2, color: "heart"},
      {number: 2, color: "heart"}
    ],
    AIHand:
    [
      {number: 6, color: "heart"},
      {number: 6, color: "heart"}
    ],
    tableHand:
    [
      {number: 10, color: "heart"},
      {number: 2, color: "heart"},
      {number: 5, color: "heart"},
      {number: 5, color: "heart"},
      {number: 6, color: "heart"}
    ],
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
      hightCard: false
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
      hightCard: false
    }
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
  
  checkState = () => {
    console.log(this.state.playerOptions);
    console.log(this.state.CUOptions);
  }

  checkPlayerOptions = () => {
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
        }}))}
    })
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
        }}))}
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
      }}))}

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
      }}))}
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
        }}))}})

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
        }}))}})
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
          }}))
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
        }}))
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
        }}))}
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
          }}))
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
        }}))
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
        }}))}
    }
  }

  checkIfFlush = () => {
    const tableHand = [...this.state.tableHand]
    const playerHand = [...this.state.playerHand]
    tableHand.push(playerHand[0])
    tableHand.push(playerHand[1])
    const tableAndPlayerHand = []
    tableHand.forEach(hand => {
      tableAndPlayerHand.push(hand.color)
    })
    let hearts = 0
    let clubs = 0
    let diamonds = 0
    let spades = 0
    tableAndPlayerHand.forEach(hand => {
      if (hand === 'heart') {hearts++}
      else if (hand === 'diamond') {diamonds++}
      else if (hand === 'club') {clubs++}
      else {spades++}
    })

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
  }

  const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
    })
    let Chearts = 0
    let Cclubs = 0
    let Cdiamonds = 0
    let Cspades = 0
    tableAndCUHand.forEach(hand => {
      if (hand === 'heart') {Chearts++}
      else if (hand === 'diamond') {Cdiamonds++}
      else if (hand === 'club') {Cclubs++}
      else {Cspades++}
    })
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
      }}))
  }
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
    tableAndPlayerHand.forEach((hand, id) => {
      if (hand == tableAndPlayerHand[id + 1] && hand == tableAndPlayerHand[id + 2]) {tableAndPlayerHand.splice(id, 3); pNext = true}
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
        }}))}
    })}

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
    tableAndCUHand.forEach((hand, id) => {
      if (hand == tableAndCUHand[id + 1] && hand == tableAndCUHand[id + 2]) {tableAndCUHand.splice(id, 3); cNext = true}
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
        }}))}
    })}
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
    if (tableAndPlayerHand.length >= 5) {
      if (tableAndPlayerHand.length == 7 && tableAndPlayerHand[6].number - 4 == tableAndPlayerHand[2].number) {
          for (let i=2; i<tableAndPlayerHand.length; i++) {
            if (tableAndPlayerHand[i].color === 'heart') {hearts++}
            else if (tableAndPlayerHand[i].color === 'diamond') {diamonds++}
            else if (tableAndPlayerHand[i].color === 'club') {clubs++}
            else {spades++}
            }
          if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState(prevState => ({playerOptions:
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
            }}))
        }
      } else if (tableAndPlayerHand.length >= 6 && tableAndPlayerHand[5].number - 4 == tableAndPlayerHand[1].number) {
        for (let i=1; i<6; i++) {
          if (tableAndPlayerHand[i].color === 'heart') {hearts++}
          else if (tableAndPlayerHand[i].color === 'diamond') {diamonds++}
          else if (tableAndPlayerHand[i].color === 'club') {clubs++}
          else {spades++}
          }
          if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState(prevState => ({playerOptions:
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
            }}))
        }
      } else if (tableAndPlayerHand.length >= 5 && tableAndPlayerHand[4].number - 4 == tableAndPlayerHand[0].number) {
        for (let i=0; i<5; i++) {
          if (tableAndPlayerHand[i].color === 'heart') {hearts++}
          else if (tableAndPlayerHand[i].color === 'diamond') {diamonds++}
          else if (tableAndPlayerHand[i].color === 'club') {clubs++}
          else {spades++}
          }
          if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState(prevState => ({playerOptions:
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
            }}))
        }
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
    if (tableAndCUHand.length >= 5) {
      if (tableAndCUHand.length == 7 && tableAndCUHand[6].number - 4 == tableAndCUHand[2].number) {
          for (let i=2; i<tableAndCUHand.length; i++) {
            if (tableAndCUHand[i].color === 'heart') {Chearts++}
            else if (tableAndCUHand[i].color === 'diamond') {Cdiamonds++}
            else if (tableAndCUHand[i].color === 'club') {Cclubs++}
            else {Cspades++}
            }
          if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState(prevState => ({CUOptions:
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
            }}))
        }
      } else if (tableAndCUHand.length >= 6 && tableAndCUHand[5].number - 4 == tableAndCUHand[1].number) {
        for (let i=1; i<6; i++) {
          if (tableAndCUHand[i].color === 'heart') {Chearts++}
          else if (tableAndCUHand[i].color === 'diamond') {Cdiamonds++}
          else if (tableAndCUHand[i].color === 'club') {Cclubs++}
          else {Cspades++}
          }
          if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState(prevState => ({CUOptions:
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
            }}))
        }
      } else if (tableAndCUHand.length >= 5 && tableAndCUHand[4].number - 4 == tableAndCUHand[0].number) {
        for (let i=0; i<5; i++) {
          if (tableAndCUHand[i].color === 'heart') {Chearts++}
          else if (tableAndCUHand[i].color === 'diamond') {Cdiamonds++}
          else if (tableAndCUHand[i].color === 'club') {Cclubs++}
          else {Cspades++}
          }
          if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState(prevState => ({CUOptions:
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
            }}))
        }
      }
      }
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
        }}))
    }
    })

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
        }}))
    }
    })
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
    if (tableAndPlayerHand.length >= 5) {
      if (tableAndPlayerHand.length == 7 && tableAndPlayerHand[6].number - 4 == tableAndPlayerHand[2].number && tableAndPlayerHand[6].number == 14) {
          for (let i=2; i<tableAndPlayerHand.length; i++) {
            if (tableAndPlayerHand[i].color === 'heart') {hearts++}
            else if (tableAndPlayerHand[i].color === 'diamond') {diamonds++}
            else if (tableAndPlayerHand[i].color === 'club') {clubs++}
            else {spades++}
            }
          if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState(prevState => ({playerOptions:
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
            }}))
        }
      } else if (tableAndPlayerHand.length >= 6 && tableAndPlayerHand[5].number - 4 == tableAndPlayerHand[1].number && tableAndPlayerHand[5].number == 14) {
        for (let i=1; i<6; i++) {
          if (tableAndPlayerHand[i].color === 'heart') {hearts++}
          else if (tableAndPlayerHand[i].color === 'diamond') {diamonds++}
          else if (tableAndPlayerHand[i].color === 'club') {clubs++}
          else {spades++}
          }
          if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState(prevState => ({playerOptions:
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
            }}))
        }
      } else if (tableAndPlayerHand.length >= 5 && tableAndPlayerHand[4].number - 4 == tableAndPlayerHand[0].number && tableAndPlayerHand[4].number == 14) {
        for (let i=0; i<5; i++) {
          if (tableAndPlayerHand[i].color === 'heart') {hearts++}
          else if (tableAndPlayerHand[i].color === 'diamond') {diamonds++}
          else if (tableAndPlayerHand[i].color === 'club') {clubs++}
          else {spades++}
          }
          if (hearts ==5 || diamonds ==5 || clubs ==5 || spades ==5) {this.setState(prevState => ({playerOptions:
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
            }}))
        }
      }
    }

    const tableCUHand = [...this.state.tableHand]
    const AIHand = [...this.state.AIHand]
    tableCUHand.push(AIHand[0])
    tableCUHand.push(AIHand[1])
    const tableAndCUHand = []
    tableCUHand.forEach(hand => {
      tableAndCUHand.push(hand.number)
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
    if (tableAndCUHand.length >= 5) {
      if (tableAndCUHand.length == 7 && tableAndCUHand[6].number - 4 == tableAndCUHand[2].number && tableAndCUHand[6].number == 14) {
          for (let i=2; i<tableAndCUHand.length; i++) {
            if (tableAndCUHand[i].color === 'heart') {Chearts++}
            else if (tableAndCUHand[i].color === 'diamond') {Cdiamonds++}
            else if (tableAndCUHand[i].color === 'club') {Cclubs++}
            else {Cspades++}
            }
          if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState(prevState => ({CUOptions:
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
            }}))
        }
      } else if (tableAndCUHand.length >= 6 && tableAndCUHand[5].number - 4 == tableAndCUHand[1].number && tableAndCUHand[5].number == 14) {
        for (let i=1; i<6; i++) {
          if (tableAndCUHand[i].color === 'heart') {Chearts++}
          else if (tableAndCUHand[i].color === 'diamond') {Cdiamonds++}
          else if (tableAndCUHand[i].color === 'club') {Cclubs++}
          else {Cspades++}
          }
          if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState(prevState => ({CUOptions:
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
            }}))
        }
      } else if (tableAndCUHand.length >= 5 && tableAndCUHand[4].number - 4 == tableAndCUHand[0].number && tableAndCUHand[4].number == 14) {
        for (let i=0; i<5; i++) {
          if (tableAndCUHand[i].color === 'heart') {Chearts++}
          else if (tableAndCUHand[i].color === 'diamond') {Cdiamonds++}
          else if (tableAndCUHand[i].color === 'club') {Cclubs++}
          else {Cspades++}
          }
          if (Chearts ==5 || Cdiamonds ==5 || Cclubs ==5 || Cspades ==5) {this.setState(prevState => ({CUOptions:
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
            }}))
        }
      }
    }
  }

  render() { 
    return ( 
    <div className="game_area">
      <button onClick={this.checkPlayerOptions}>SPRAWDŹ</button>
      <button onClick={this.checkState}>SPRAWDŹ3</button>
      <button onClick={this.checkIfFullHouse}>SPRAWDŹ2</button>
      <CU cards={this.state.cards}/>
      <Table cards={this.state.cards} />
      <Player cards={this.state.cards}/>
    </div>
   );
  }
}
 
export default App;
