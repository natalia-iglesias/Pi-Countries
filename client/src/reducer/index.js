
const initialState = {
    countries: [],
    countriesList: [],
    activity: [],
    detail: {},
    paginacion: {
        actualPage: 1,
        countriesPerPage: 9,
    }
    
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
            case 'POPULATION_ORDER':            
            const PopulationArray =  action.payload === 'max' ? 
                state.countries.sort(function(a, b){
                   if(a.population > b.population) {
                    return 1
                }       
                  if(b.population > a.population){
                    return -1
                  }     
                  return 0     
                }):
                state.countries.sort(function(a, b){
                    if(a.population > b.population) {
                        return -1
                    }       
                      if(b.population > a.population){
                        return 1
                      }     
                      return 0     
                })  
            return{
                ...state,
                countries: PopulationArray
            }
            

            case 'BY_ACTIVITY':
                const filterActivities = state.countriesList.filter(e => e.Activities.length > 0)
                console.log(filterActivities)
                return {
                    ...state,
                    countries: filterActivities
                }
           
                
                
             

         default:
            return state;   
    }
}
export default rootReducer;