import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import CreateActivity from './components/CreateActivity';
import Details from './components/Details';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
      <Route exact path= '/' component={LandingPage}/>
      <Route path = '/home' component={Home}/>
      <Route path = '/home/details/:id' component={Details}/>
      <Route path = '/activity' component={CreateActivity}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

// recordar correr la api sino no funciona ahhh

