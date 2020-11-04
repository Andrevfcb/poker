import React from 'react';
import './styles/table.css'

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
            else return 'draw'
        }
    }
    
    return (
        <div className='table'>
            <div className='table-cards'>
            {props.cards.length >= 3 ? <img className='table-cards-first' src={props.cards[0].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-second' src={props.cards[1].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-third' src={props.cards[2].img} alt="table" /> : null}
            {props.cards.length >= 4 ? <img className='table-cards-fourth' src={props.cards[3].img} alt="table" /> : null}
            {props.cards.length >= 5 ? <img className='table-cards-fifth' src={props.cards[4].img} alt="table" /> : null}
            {checkResult()}
            {/* {props.whoWin} */}
            <p className='cuBID'>CU: {props.cuBID}</p>
            <p className='playerBID'>GRACZ: {props.playerBID}</p>
            <p className='allBID'>ŁĄCZNIE: {props.allBID > 0 ? props.allBID : null}</p>

            </div>
        </div>
    )
}

export default Table;