import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountrys } from '../../actions';


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
       
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountrys(name))
    }

  return (
    <div>
        <input
        type = 'text'
        placeholder='Country'
        onChange={(e) => handleInputChange(e) }/>
        <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        
    </div>
    
  )
}
