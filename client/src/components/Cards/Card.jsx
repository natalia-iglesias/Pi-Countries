import React from 'react'
import {Link} from 'react-router-dom'
import style from './Card.module.css'


export default function Card({name, continent,img ,id}) {
  return (
    <div className= {style.card}>
      <Link to = {'/details/' + id}>
        
        <h3>{name}</h3>
        <h5>{continent}</h5>
        <img className= {style.img}src= {img} alt = "img flag"/>
        </Link>
    </div>
  )
}
