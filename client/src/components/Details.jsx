
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDetail} from '../actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details(props) {
    console.log(props)

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch])

    const myCountry = useSelector((state) => state.detail)

   return (
    <div>
        {
            myCountry.length > 0 ? 
             <div>  
               <h1>Country: {myCountry.name}</h1>
                <h2>Continet: {myCountry.continet}</h2>
                <h2>Subregion: {myCountry.subregion}</h2>
                <h2>Area: {myCountry.area}</h2>
                <h2>Population: {myCountry.population}</h2>
                <h2>Activities: {myCountry.activity}</h2>
                <img scr={myCountry.flag} alt = "img flag"/>

            </div> : <p>Loading...</p>    
        }
        <Link to= '/home'>
            <button>volver</button>
        </Link>
    </div>
   )
}
 