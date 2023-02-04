// activity ---> ruta
import React from 'react';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { getCountrys, postActivity } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux';
import style from '../Created/Create.module.css'


function validate(input){
  let errors = {};
  let nameValid = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  if(!input.name.trim()){
    errors.name = "*Name required";
}else if(!nameValid.test(input.name.trim())){
    errors.name = "*The name field only accepts letters and blank spaces";
};
   if(input.difficulty === undefined){
    errors.difficulty = "Difficulty required";
  }if(!input.duration){
    errors.duration = "Duration required";
}else if(input.duration < 1 || input.duration > 24){
    errors.duration = "The duration must be between 1 and 24 hours";
};
if(!input.season){
    errors.season = "Season required";
}
if(input.countries.length === 0){
    errors.countries = "Country required";
}

  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
 
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  

  const [input, setInput] = useState({
    name: '',
    difficulty: 0,
    duration: '',
    season: '',
    countries: [],
  });


  function handelChange(e) {
    console.log(e.target.name, '------', e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }));
    console.log(input)
 
   
  }
  function handelSelect(e) {
    console.log(e.target.name, '------', e.target.value);
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
    setErrors(validate({
      ...input,
      countries: [...input.countries, e.target.value]
  }))           
  }
  
  function handelSeason(e) {
    console.log(e.target.name, '------', e.target.value);
    setInput({
      ...input,
      season: e.target.value,
    });
    setErrors(validate({
      ...input,
      season: e.target.value
    }))
  }
  
  
  
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(input));
    if (input.name && input.difficulty && input.duration && input.season && input.countries.length  && !Object.keys(errors).length) {
      console.log(input);
      dispatch(postActivity(input));
      alert('Actividad Creada');
      setInput({
        name: '',
        difficulty: 0,
        duration: '',
        season: 1,
        countries: [],
      });
    }else {
      alert('All fields are required!!')
    } 
  }
    
   

  useEffect(() => {
    dispatch(getCountrys());
  }, [dispatch]);

  return (
    <div className={style.bkg}>
      <Link to='/home'>
        <button className={style.btn}>Back</button>
      </Link>
      <h1 className={style.h1}>Create your Activity</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={style.name}>Name Activity</label>
          <input className={style.inputs}
            type ='text' 
            value={input.name}
            name='name'
            onChange={(e) => handelChange(e)}
          />
          {errors.name && (
            <p>{errors.name}</p>
          )}
           
        </div>
        <div>
          <label className= {style.name}>Difficulty</label>
          <input className={style.inputs}
            type='range'
            min= "1"
            max= "5"
            value={input.difficulty}
            name='difficulty'
            onChange={(e) => handelChange(e)}
          />
           {errors.difficulty && (
            <p>{errors.difficulty}</p>
          )}
        </div>
        <div>
          <label className= {style.name}>Duration</label>
          <input className={style.inputs}
            type='number'
            value={input.duration}
            name='duration'
            onChange={(e) => handelChange(e)}
          />
           {errors.duration && (
            <p>{errors.duration}</p>
          )}
        </div>
        <div>
          <label className= {style.name} >Season</label>
          <select onChange={(e) => handelSeason(e)} className={style.select}>
            <option className= {style.name} >Select Season</option>
            <option value='Summer'>Summer</option>
            <option value='Autumn'>Autumn</option>
            <option value='Winter'>Winter</option>
            <option value='Spring'>Spring</option>
          </select>
          {errors.season && <p>{errors.season}</p>}
          <ul>
            <li>{input.season}</li>
          </ul>
        </div>
          <p className= {style.name} >Country</p>
        <select onChange={(e) => handelSelect(e)}className={style.select}>
        
          <option className= {style.option} >Select a Country</option>
          {countries?.map((country) => {
            return (
              <option key={country.id} value={country.name}>
                {country.name}
                
              </option>
            );
          })}
        </select>
        {errors.countries && <p>{errors.countries}</p>}
        <ul>
          <li>{input.countries.map((el) => el + ' ,')}</li>
        </ul>
        

        <button className={style.btn} type='submit'>Create Activity</button>
      </form>
    </div>
  );
}

