import axios from 'axios';

export function getCountrys(){
    return async function(dispatch){
        var response = await axios.get('http://localhost:3001/countries')
          dispatch({
            type: 'GET_COUNTRIES',
            payload: response.data
        })
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
export function activitiesCreated(payload){
    return{
        type:'ACTIVITIES_CREATED',
        payload

    }

}

export function getActivity(){
    return async function(dispatch){
        var activities = await axios.get('http://localhost:3001/activity', {

        });
        const activitiesName = activities.data.map(el => el.name.toLowerCase())
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: activitiesName
        })
    }
}
 export function postActivity(payload){
    return async function(){
        console.log('response')
        const response = await axios.post('http://localhost:3001/activity', payload);
        
        return response;
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