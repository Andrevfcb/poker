import React from 'react';
import './styles/table.css'
import unactiveCard from './cards/Red_back.jpg'

const Table = (props) => {
    let pOption
    let cOption
    const getPlayerHand = () => {
        if (props.pOptions.royalFlush) return pOption = 10
        else if (props.pOptions.straightFlush) return pOption = 9
        else if (props.pOptions.fourOfKind) return pOption = 8
        else if (props.pOptions.fullHouse) return pOption = 7
        else if (props.pOptions.flush) return pOption = 6
        else if (props.pOptions.streigh) return pOption = 5
        else if (props.pOptions.threeOfAKind) return pOption = 4
        else if (props.pOptions.twoPairs) return pOption = 3
        else if (props.pOptions.onePair) return pOption = 2
        else if (props.pOptions.hightCard) return pOption = 1
    }
    const getCUHand = () => {
        if (props.cOptions.royalFlush) return cOption = 10
        else if (props.cOptions.straightFlush) return cOption = 9
        else if (props.cOptions.fourOfKind) return cOption = 8
        else if (props.cOptions.fullHouse) return cOption = 7
        else if (props.cOptions.flush) return cOption = 6
        else if (props.cOptions.streigh) return cOption = 5
        else if (props.cOptions.threeOfAKind) return cOption = 4
        else if (props.cOptions.twoPairs) return cOption = 3
        else if (props.cOptions.onePair) return cOption = 2
        else if (props.cOptions.hightCard) return cOption = 1
    }
    getPlayerHand()
    getCUHand()
    const checkResult = () => {
        if (pOption > cOption) return 'player win'
        else if (pOption < cOption) return 'CU win'
        else {
            if (props.highPCard > props.highCCard) return 'player win'
            else if (props.highPCard < props.highCCard) return 'CU win'
            else {
            if (props.highPCard2 > props.highCCard2) return 'player win'
            else if (props.highPCard2 < props.highCCard2) return 'CU win'
            else return 'draw'
        }}
    }
    
    return (
        <div className='table'>
            <div className='table-cards'>
            {props.cards.length >= 3 ? <img className='table-cards-first' src={props.cards[0].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-second' src={props.cards[1].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-third' src={props.cards[2].img} alt="table" /> : null}
            {props.cards.length >= 4 ? <img className='table-cards-fourth' src={props.cards[3].img} alt="table" /> : null}
            {props.cards.length >= 5 ? <img className='table-cards-fifth' src={props.cards[4].img} alt="table" /> : null}
            {props.play ? <img className='table-cards-all' src={unactiveCard} alt="table" /> : null}
            {/* {checkResult()} */}
            {/* {props.whoWin} */}
            <p className='cuBID'>{props.cuBID > 0 ? `CU: ${props.cuBID}` : null}</p>
            <p className='playerBID'>{props.playerBID > 0 ? `PLAYER: ${props.playerBID}` : null}</p>
            <p className='allBID'>{props.allBID > 0 ? `POT: ${props.allBID}` : null}</p>
            <p className='playerPlay'>{props.playerPlay}</p>
            <p className='cuPlay'>{props.cuPlay}</p>

            </div>
        </div>
    )
}

export default Table;