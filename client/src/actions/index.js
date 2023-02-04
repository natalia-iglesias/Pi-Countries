import axios from 'axios';

export function getCountrys(){
    try{
    return async function(dispatch){
        var response = await axios.get('http://localhost:3001/countries')
          dispatch({
            type: 'GET_COUNTRIES',
            payload: response.data
        })
    }
}catch(error){
    console.log(error)
}
}
export function filterByContinents(payload){
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }

}

export function getNameCountrys(name){
   
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/countries?name='+ name);
            dispatch({
                type: 'GET_NAME_COUNTRIES',
                payload:json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}
export function populationOrder(payload){
    return{
            type:'POPULATION_ORDER',
            payload
        }
}
 

export function getActivity(){
    return async function(dispatch){
        try{
        var info = await axios.get('http://localhost:3001/activity', {});
        //const activitiesName = activities.data.map(el => el.name.toLowerCase())
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: info.data
        })
    }catch(error){
        console.log(error)
    }
}

}
export function byActivity(){
     return {
        type: 'BY_ACTIVITY',
     }
}
export function postActivity(payload) {
    console.log(payload);
    const activity = {
      name: payload.name,
      difficulty: payload.difficulty,
      duration: payload.duration,
      season: payload.season,
      countries: payload.countries,
    };
    try{
    return async function () {
      await axios.post('http://localhost:3001/activity', activity);
    };
   }catch(error){
    console.log(error)
}
  } 
 export function getDetail(id){
    return async function(dispatch){
        try {                           //http://localhost:3001/countries/
            var json = await axios.get('http://localhost:3001/countries/' + id)
            console.log(json.data)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
} 