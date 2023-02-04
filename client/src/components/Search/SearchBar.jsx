import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountrys } from '../../actions';
import style from '../Search/Search.module.css'

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
        setName('')
    }

  return (
    <div>
      <form>
        <input className={style.input}
        type = 'text'
        placeholder='Country'
        onChange={(e) => handleInputChange(e) }/>
        <button type='submit' onClick={(e) => handleSubmit(e)} className={style.search}>Search</button>
       </form>  
    </div>
    
  )
}
