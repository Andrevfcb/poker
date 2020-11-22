import React from 'react';
import './styles/player.css'

const Player = (props) => {
    const options = () => {
        if (props.options.royalFlush) return 'Royal Flush'
        else if (props.options.straightFlush) return 'Straight Flush'
        else if (props.options.fourOfKind) return 'Four of a Kind'
        else if (props.options.fullHouse) return 'Full House'
        else if (props.options.flush) return 'Flush'
        else if (props.options.streigh) return 'Straight'
        else if (props.options.threeOfAKind) return 'Three of a Kind'
        else if (props.options.twoPairs) return 'Two Pairs'
        else if (props.options.onePair) return 'One Pair'
        else if (props.options.hightCard) return 'High Card'
    }
    return (
            <div className={props.play ? (props.allInPlayed ? 'player' : (props.turn == 1 ? 'player player-turn' : 'player')) : null}>
            <div className='player-cards'>
            {props.play ? <h3>Your chips: {props.money}</h3> : null}
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