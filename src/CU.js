import React from 'react';
import './styles/cu.css'

const CU = (props) => {

    return (
        <div className='cu'>
            <div className='cu-cards'>
            {props.cards.length == 2 ? <img className='cu-cards-first' src={props.cards[0].img} alt="cu" /> : null}
            {props.cards.length == 2 ? <img className='cu-cards-second' src={props.cards[1].img} alt="cu" /> : null}
            </div>
        </div>
    )
}

export default CU;