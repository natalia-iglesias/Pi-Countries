// activity ---> ruta 
import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { getCountrys, postActivity } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


export default function CreateActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.countries)

    const [input, setInput] = useState({
        name: "",
        difficulty: 1,
        duration:"",
        season:1,
        countries: []
    })
    useEffect(() => {
        dispatch(getCountrys());
    }, []);

    /*  "name" : "Nadar",
    "difficulty": 2,
    "duration": 10,
    "season": "summer",
    "countries": ["Argentina", "Chile"] */

    function handelChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    function handelSelect(e){
        setInput({
            ...input,
            countries:[...input.countries,e.target.value]
        })
    }
    function handelSeason(e){
        setInput({
            ...input,
            season : e.target.value
        })
    }

    function handleSubmit(e){
        console.log('holaaa')
        e.preventDelfault();
        console.log(input)
        dispatch(postActivity(input))
        alert('Actividad Creada')
        setInput({
            name: "",
            difficulty: 1,
            duration:"",
            season:1,
            countries: []
        })
        history.push('/home')
    }


  return (
    <div>
        <Link to = '/home'><button>volver</button></Link>
        <h1>Crea tu Actividad</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input
                type = "text"
                name = "name"
                value = {input.name}
                onChange={e => handelChange(e)}
                />
            </div>
            <div>
                <label>Difficulty</label>
                <input
                 type = "range" min='1' max='5'
                 name = "difficulty"
                 value = {input.difficulty}
                 onChange={e => handelChange(e)}

                />
            </div>
            <div>
                <label>Duration</label>
                <input 
                type="number" 
                name = "duration"
                value= {input.duration}
                onChange={e => handelChange(e)}
                />
            </div>
            <div>
                <label>Season</label>
                <select onChange={e => handelSeason(e)}>
                <option disabled value="None">Select Season</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                </select>
                <ul><li>{input.season}</li></ul>
               
            </div>
            <select onChange= {(e) => handelSelect(e)}>
                
           <option >Select a Country</option>
                {countries?.map((country) => {
                  return <option key={country.id} value={country.id}>{country.name}</option>
                })}
            </select>

            <ul><li>{input.countries.map(el => el + " ,")}</li></ul>
            
            <button type='submit'>Crear Actividad</button>
        </form>
    </div>
  )
}

