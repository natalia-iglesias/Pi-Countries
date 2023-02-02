import React from 'react';
import style from './Home.module.css'
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCountrys, filterByContinents, orderByName, populationOrder,byActivity} from '../../actions/index';
import { Link } from 'react-router-dom';

import Card from '../Cards/Card';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../Search/SearchBar';

export default function Home() {
  
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.countries)
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)
  const indexOfLastCountry =
    currentPage === 1 ? 9 :  currentPage * countriesPerPage;
  const indexFirstCountry = 
  currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexFirstCountry, indexOfLastCountry);


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

useEffect(() => {
  dispatch(getCountrys())
}, [dispatch])

/* function handleClink(e){
  e.preventDefault();
  dispatch(getCountrys());
} */
function handleSort(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value))
  setCurrentPage(1);
  setOrden(`Ordenado ${e.target.value}`)
}

function handleFilterContinents(e){
  dispatch(filterByContinents(e.target.value ))

}
/* function handleCreatedAct(e){
  dispatch(filterAct(e.target.value))

} */
function handlePopulation(e){
  e.preventDefault();
  dispatch(populationOrder(e.target.value));
  setCurrentPage(1);
  setOrden(`Ordenado ${e.target.value}`)
}
function handleFilterAct(e){
  dispatch(byActivity())
}


  return (
      
    <div className={style.bkgHome}>
      <select onChange={e => handleSort(e)}>
      <option>
          Order by abc
        </option>
        <option value='asc'>Pascending a-z</option>
        <option value='desc'> descending z-a</option>
      </select>

      <select onChange={e => handlePopulation(e)}>
            <option>By Population</option>
            <option value = 'max'>Pascending population</option>
            <option value = 'min'>descending  population</option>
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
     <button onClick={handleFilterAct}>All Activities</button>
    
     
      
      
      <SearchBar/>
     <Link to = '/activity'><button>Create Activity</button></Link> 
      <Paginado
      currentPage = {currentPage}
      countriesPerPage = {countriesPerPage}
      allCountries = {allCountries.length}
      paginado = {paginado} 
     
      />
      
      {
        currentCountries?.map((el) => {
          return(
            
              <Card className={style.card}
                 key = {el.id}
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
