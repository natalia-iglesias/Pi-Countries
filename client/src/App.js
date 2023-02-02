import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import CreateActivity from './components/Created/CreateActivity';
import Details from './components/Details/Details';



function App() {
  return (
    <BrowserRouter>
    <div className="App" >
     <Switch>
      <Route exact path= '/' component={LandingPage}/>
      <Route path = '/home' component={Home}/>
      <Route path = '/details/:id' component={Details}/>
      <Route path = '/activity' component={CreateActivity}/>
     
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

// recordar correr la api sino no funciona ahhh

