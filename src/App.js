// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  return (
    <Router className="App">
      <Header />
     <Switch>
       <Route exact path="/">
        <Country />
       </Route>
       <Route path="/country/:countryName">
        <CountryDetail />
       </Route>
       <Route  path="/country">
        <Home />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
