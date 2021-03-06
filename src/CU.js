import React from 'react';
import './styles/cu.css'
import unactiveCard from './cards/Red_back.jpg'

const CU = (props) => {
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
        <div className='cu'>
            <div className='cu-cards'>
            {props.play ? <h3>CU chips: {props.money}</h3> : null}
            {/* {props.cards.active ? null : <img className='cu-cards-first' src={unactiveCard} alt="cu" />}
            {props.cards.active ? null :  <img className='cu-cards-second' src={unactiveCard} alt="cu" />} */}
            {props.cards.length == 2 ? <img className='cu-cards-first' src={props.cards[0].active ? props.cards[0].img : unactiveCard} alt="cu" /> : null}
            {props.cards.length == 2 ? <img className='cu-cards-second' src={props.cards[1].active ? props.cards[1].img : unactiveCard} alt="cu" /> : null}
            
            </div>
            {/* <h4>Ręka CU: {options()}</h4> */}
            {/* <div className='cu-options'>
            <button onClick={props.check}>CHECK</button>
            <button onClick={props.call}>CALL</button>
            <h4>twój raise: {props.cuRaiseValue}</h4>
            <input type='number' name='cu' value={props.cuRaiseValue} onChange={props.handleRChange} />
            <button onClick={props.raise}>RAISE</button>
            <button onClick={props.allin}>ALL IN</button>
            <button onClick={props.fold}>FOLD</button>
            </div> */}
        </div>
    )
}

export default CU;