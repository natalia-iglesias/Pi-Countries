import React from 'react'
import style from './Paginado.module.css';

export default function Paginado({countriesPerPage,allCountries,paginado}) {
  const pageNumbers = []

  for(let i = 1; i <=Math.ceil(allCountries /countriesPerPage); i++){
    pageNumbers.push(i)
  }
  
    return (
      <div className={style.contenedor}>
        <nav >
        <ul>
            { pageNumbers &&
              pageNumbers.map(number => {
                return (
                <li key={number.id} className={style.li}>
                <button className={style.btn} onClick={() => paginado(number)}>{number}</button>
                </li>
                )
              })}
        </ul>
    </nav>
    </div>
  )
}
