import React from 'react'

export default function Paginado({countriesPerPage,allCountries,paginado}) {
  const pageNumbers = []

  for(let i = 1; i <=Math.ceil(allCountries/countriesPerPage); i++){
    pageNumbers.push(i)
  }
  
    return (
        <nav>
        <ul>
            { pageNumbers &&
              pageNumbers.map(number => {
                return (
                <li key={number.id} >
                <a onClick={() => paginado(number)}>{number}</a>
                </li>
                )
              })}
        </ul>
    </nav>
  )
}
