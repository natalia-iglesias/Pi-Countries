import React, { useState, useEffect } from "react";
  import { Link, useHistory } from "react-router-dom";
  import { getActivities, getCountries } from "../redux/actions";
  import { useDispatch, useSelector } from "react-redux";
  import axios from "axios";


  export default function AddActivities() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    //const history = useHistory();

    const [form, setInput] = useState({
      // id: 0,
      name: "",
      difficulty: 0,
      duration: 0, 
      season: "",
      countries: [],
    });

    function handleChange(e) {
      setInput({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
     async function handleSubmit(e) {
        e.preventDefault();
        console.log(form)
        await axios({
          method: "post",
          url: "/activities/",
          data: form,
      });
      alert("Activity has been created successfully");
    }


    
      function handelSelect(e){
        setInput({
            ...form,
            countries:[...form.countries,e.target.value]
        })
    }
    

    useEffect(() => {
      dispatch(getActivities());
      dispatch(getCountries)
    }, [dispatch]);

    return (
      <div>
        <Link to="/home">
          <button>Back</button>
        </Link>
        <h1>Add activity</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={form.name}
            />
          </div>


          {/* <div>
            <label>ID</label>
            <input
              onChange={handleChange}
              name="id"
              type="number"
              
              value={form.id}
            />
          </div> */}


          <div>
            <label>Difficulty</label>
            <input
              onChange={handleChange}
              name="difficulty"
              type="number"
              min="1"
              max="5"
              value={form.difficulty}
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              onChange={handleChange}
              name="duration"
              type="number"
              min="1"
              max="24"
              value={form.duration}
            />
          </div>
          <div>
            <label>Season</label>
            <input
              onChange={handleChange}
              name="season"
              type="text"
              value={form.season}
            />
          </div>
          <div>
          <select onChange= {(e) => handelSelect(e)}>
                
                <option >Select a Country</option>
                     {countries?.map((country) => {
                       return <option key={country.id} value={country.id}>{country.name}</option>
                     })}
                 </select>
     
                 <ul><li>{form.countries.map(el => el + " ,")}</li></ul>
          </div>
        
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }