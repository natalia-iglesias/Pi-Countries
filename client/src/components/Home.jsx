import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCountrys, filterByContinents, orderByName } from '../actions';
import { Link } from 'react-router-dom';

import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';

export default function Home() {
  
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.countries)
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(9)
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = allCountries.slice(indexFirstCountry, indexOfLastCountry)


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

useEffect(() => {
  dispatch(getCountrys())
}, [dispatch])

function handleClink(e){
  e.preventDefault();
  dispatch(getCountrys());
}
function handleSort(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value))
  setCurrentPage(1);
  setOrden(`Ordenado ${e.target.value}`)
}

function handleFilterContinents(e){
  dispatch(filterByContinents(e.target.value ))

}


  return (
      
    <div>
      <select onChange={e => handleSort(e)}>
      <option value='' selected disabled>
          Order by abc
        </option>
        <option value='asc'>Ascendente a-z</option>
        <option value='desc'>Descendente z-a</option>
      </select>
      <select>
        <option value='asc '>poblacion +</option>
        <option value='desc'>poblacion -</option>
      </select>
      <select onChange={e => handleFilterContinents(e)}>
           <option value='All'>Filter by Continent</option>
						<option value='Africa'>Africa</option>
						<option value='Antarctica'>Antarctica</option>
						<option value='Asia'>Asia</option>
						<option value='Europe'>Europe</option>
						<option value='North America'>North America</option>
						<option value='Oceania'>Oceania</option>
						<option value='South America'>South America</option>
         </select>
     
      <select>
      <option value = 'act'>Actividad turistica</option>
      <option value = 'act'>Actividad creada por mi</option>
      <option value = 'act'>Todas las Actividades</option>
      </select>
      <SearchBar/>
     <Link to = '/activity'><button>Crear Actividad</button></Link> 
      <Paginado
      countriesPerPage = {countriesPerPage}
      allCountries = {allCountries.length}
      paginado = {paginado}
      />
      
      {
        currentCountries?.map((el) => {
          return(
            
              <Card
                 id= {el.id}
                 name = {el.name}
                 continent = {el.continent}
                 img = {el.flag}
              />
            
          )
        })
      }
    </div>
   
  )
}

/* 
 falta el input de busqueda por pais


 */
