import React from 'react';
import './styles/table.css'

const Table = (props) => {

    return (
        <div className='table'>
            <div className='table-cards'>
            <img className='table-cards-first' src={props.cards[0].img} alt="table" />
            <img className='table-cards-second' src={props.cards[1].img} alt="table" />
            <img className='table-cards-third' src={props.cards[2].img} alt="table" />
            <img className='table-cards-fourth' src={props.cards[3].img} alt="table" />
            <img className='table-cards-fifth' src={props.cards[4].img} alt="table" />
            </div>
        </div>
    )
}

export default Table;