import React from 'react';
import './styles/cu.css'

const CU = (props) => {

    return (
        <div className='cu'>
            <div className='cu-cards'>
            <img className='cu-cards-first' src={props.cards[0].img} alt="cu" />
            <img className='cu-cards-second' src={props.cards[0].img} alt="cu" />
            </div>
        </div>
    )
}

export default CU;