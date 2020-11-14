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
            <div className={props.play ? 'player' : null}>
            <div className='player-cards'>
            {props.play ? <h3>Your chips: {props.money}</h3> : null}
            {/* <h3>Twoja ręka: {options()}</h3> */}
            {props.cards.length == 2 ? <h3>Your hand: {options()}</h3> : null}
            {props.cards.length == 2 ? <img className='player-cards-first' src={props.cards[0].img} alt="player" /> : null}
            {props.cards.length == 2 ? <img className='player-cards-second' src={props.cards[1].img} alt="player" /> : null}
            </div>
            <div className='player-options'>
            {props.play ? <button onClick={props.check}>CHECK</button> : null}
            {props.play ? <button onClick={props.call}>CALL</button> : null}
            {props.play ? <input type='number' name='player' value={props.playerRaiseValue} onChange={props.handleRChange} /> : null}
            {props.play ? <button onClick={props.raise}>RAISE</button> : null}
            {props.play ? <button onClick={props.allin}>ALL IN</button> : null}
            {props.play ? <button onClick={props.fold}>FOLD</button> : null}
            </div>
        </div>
    )
}

export default Player;