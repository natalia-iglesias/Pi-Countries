
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDetail} from '../../actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from '../Details/Details.module.css'

export default function Details(props) {
    console.log(props)

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch,id])

    const myCountry = useSelector((state) => state.detail)
    console.log(myCountry)

   return (
    <div className={style.bkg}>
        <Link to= '/home'>
            <button className= {style.btn}>volver</button>
        </Link>
        {
            myCountry ? 
             <div className={style.div}>  
               <h1 className={style.name}>Country: {myCountry.name}</h1>
                <h2>Continent: {myCountry.continent}</h2>
                <h2>Capital: {myCountry.capital}</h2>
                <h2>Subregion: {myCountry.subregion}</h2>
                <h2>Area: {myCountry.area}</h2>
                <h2>Population: {myCountry.population}</h2>
                <h2>Activities: {myCountry.Activities?.map(el => {
                    return (
                        <>
                        <p>Name: {el.name}</p>
                        <p>Difficulty: {el.difficulty}</p>
                        <p>Duration: {el.duration} hs</p>
                        <p>Season: {el.season}</p>
                        </>
                    )
                   
                }
                 )
                    }</h2>

            </div> : <p>Loading...</p>    
        }
        <div className={style.img}>
        <img  src={myCountry.flag} alt = "img flag"/>
        </div>
    </div>
   )
}
 