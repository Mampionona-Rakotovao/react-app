import logo from './logo.svg';
import './App.css';
import Welcome from './composant/Welcome';
import Car from './composant/Car';

function App() {
  return (
    //la composante Welcome est appelée ici
    <>
     <Car brande="BMWW"/>
     {/* <Welcome/> */}
    </>
  );
}

export default App;
