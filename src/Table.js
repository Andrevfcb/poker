import React from 'react';
import './styles/table.css'

const Table = (props) => {

    return (
        <div className='table'>
            <div className='table-cards'>
            {props.cards.length >= 3 ? <img className='table-cards-first' src={props.cards[0].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-second' src={props.cards[1].img} alt="table" /> : null}
            {props.cards.length >= 3 ? <img className='table-cards-third' src={props.cards[2].img} alt="table" /> : null}
            {props.cards.length >= 4 ? <img className='table-cards-fourth' src={props.cards[3].img} alt="table" /> : null}
            {props.cards.length >= 5 ? <img className='table-cards-fifth' src={props.cards[4].img} alt="table" /> : null}
            </div>
        </div>
    )
}

export default Table;