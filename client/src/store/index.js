
/* import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
    rootReducer,
	composeEnhancers(applyMiddleware(thunk))
    );
    export default Store;
  */  
   /*  import { createStore, applyMiddleware, compose } from 'redux';
    import rootReducer from '../reducer';
    import thunk from 'redux-thunk';
    
    const composeEnhancers =
      (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;
    
    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    
    export default store;
     */
   
   
    import {createStore, applyMiddleware} from 'redux';
   import {composeWithDevTools} from 'redux-devtools-extension';
   import thunk from 'redux-thunk';
   import rootReducer from '../reducer';
   
   export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
   
   
   