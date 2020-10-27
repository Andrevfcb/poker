import React from 'react';
import './styles/player.css'

const Player = (props) => {

    return (
        <div className='player'>
            <div className='player-cards'>
            {props.cards.length == 2 ? <img className='player-cards-first' src={props.cards[0].img} alt="player" /> : null}
            {props.cards.length == 2 ? <img className='player-cards-second' src={props.cards[1].img} alt="player" /> : null}
            </div>
        </div>
    )
}

export default Player;