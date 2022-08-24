import React from 'react'
import './card.styles.scss'

export const Card = props => {
  return (
    <div className="card-container">
      <img alt="character" style={{width:'150px',height:'150px'}} src={props.character.image} />
      <h2>{props.character.title}</h2>
      <p>price: ${props.character.price}</p>
    </div>
  )
}