import logo from './logo.svg';
import './App.css';
import Welcome from './composant/Welcome';
import Car from './composant/Car';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



function App() {
  return (
    /*la composante Welcome est appelée ici
    <>
     <Car brande="BMWW"/>
     <Car brand="GOLF" year="1234"/>
     {Welcome/> }
    </>
    */

    <>
     <Router/>
    </>
    
  );
}

export default App;
