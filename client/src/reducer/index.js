
const initialState = {
    countries: [],
    countriesList: [],
    activity: [],
    detail: {}
    
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                countriesList: action.payload
            }
           case 'GET_DETAILS':
                return {
                    ...state,
                    
                    detail: action.payload

                }  
            case 'GET_NAME_COUNTRIES':
                return {
                    ...state,
                    countries: action.payload
                }
        case 'FILTER_BY_CONTINENT':
            const allCountries = state.countriesList
            const continentsFilter = action.payload === 'All' 
            ? allCountries : allCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: continentsFilter
            }
         case 'ORDER_BY_NAME':
            let sortdArr = action.payload === 'asc' ?
            state.countries.sort(function(a,b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.countries.sort(function(a, b){
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            }) 
            return {
                ...state,
                countries: sortdArr
            }
            case 'GET_ACTIVITY':
                return {
                    ...state,
                    activity: action.payload
                }
            case 'POST_ACTIVITY':
                return {
                    ...state,
                }
              

  

         default:
            return state;   
    }
}
export default rootReducer;