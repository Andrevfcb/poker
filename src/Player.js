import React from 'react';
import './styles/player.css'

const Player = (props) => {
    const options = () => {
        if (props.options.royalFlush) return 'royalFlush'
        else if (props.options.straightFlush) return 'straightFlush'
        else if (props.options.fourOfKind) return 'fourOfKind'
        else if (props.options.fullHouse) return 'fullHouse'
        else if (props.options.flush) return 'flush'
        else if (props.options.streigh) return 'streigh'
        else if (props.options.threeOfAKind) return 'threeOfAKind'
        else if (props.options.twoPairs) return 'twoPairs'
        else if (props.options.onePair) return 'onePair'
        else if (props.options.hightCard) return 'highCard'
    }
    return (
        <div className='player'>
            <div className='player-cards'>
            {props.cards.length == 2 ? <img className='player-cards-first' src={props.cards[0].img} alt="player" /> : null}
            {props.cards.length == 2 ? <img className='player-cards-second' src={props.cards[1].img} alt="player" /> : null}
            <h4>Twoja ręka: {options()}</h4>
            <h4>Twoje żetony: {props.money}</h4>
            <button onClick={props.check}>CHECK</button>
            <button onClick={props.call}>CALL</button>
            <h4>twój raise: {props.playerRaiseValue}</h4>
            <input type='number' name='player' value={props.playerRaiseValue} onChange={props.handleRChange} />
            <button onClick={props.raise}>RAISE</button>
            <button onClick={props.allin}>ALL IN</button>
            <button>FOLD</button>
            </div>
        </div>
    )
}

export default Player;