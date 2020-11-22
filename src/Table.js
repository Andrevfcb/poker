import React from 'react';
import './styles/table.css'
import unactiveCard from './cards/Red_back.jpg'

const Table = (props) => { 
    return (
        <div className='table'>
            <div className='table-cards'>
            {props.cards.length >= 3 ? <img className='table-cards-first' src={props.cards[0].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-second' src={props.cards[1].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-third' src={props.cards[2].img} alt="table" /> : null}
            {props.cards.length >= 4 ? <img className='table-cards-fourth' src={props.cards[3].img} alt="table" /> : null}
            {props.cards.length >= 5 ? <img className='table-cards-fifth' src={props.cards[4].img} alt="table" /> : null}
            {props.play ? <img className='table-cards-all' src={unactiveCard} alt="table" /> : null}
            <p className='cuBID'>{props.cuBID > 0 ? `CU: ${props.cuBID}` : null}</p>
            <p className='playerBID'>{props.playerBID > 0 ? `PLAYER: ${props.playerBID}` : null}</p>
            <p className='allBID'>{props.allBID > 0 ? `POT: ${props.allBID}` : null}</p>
            <p className='playerPlay'>{props.playerPlay}</p>
            {props.play ? (props.allInPlayed ? null : (props.turn == 1 ? <p className='playerTurn'>Your turn</p> : null)) : null} 
            <p className='cuPlay'>{props.cuPlay}</p>

            </div>
        </div>
    )
}

export default Table;