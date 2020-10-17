import React from 'react';
import './styles/player.css'

const Player = (props) => {

    return (
        <div className='player'>
            <div className='player-cards'>
            <img className='player-cards-first' src={props.cards[0].img} alt="player" />
            <img className='player-cards-second' src={props.cards[0].img} alt="player" />
            </div>
        </div>
    )
}

export default Player;