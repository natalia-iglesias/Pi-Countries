import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({name, continent,img ,id}) {
  return (
    <div>
      <Link to = {'/details/' + id}>
        
        <h3>{name}</h3>
        <h5>{continent}</h5>
        <img src= {img} alt = "img flag"/>
        </Link>
    </div>
  )
}
