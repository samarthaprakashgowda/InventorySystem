import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddCar from './Pages/AddCar';
import Inventory from './Pages/Inventory';

function App() {
  return (
      <>
        <Router>
            <Navbar/>
             <Switch>
                <Route path='/Home' exact component={Home} />
                <Route path='/Addcar' component={AddCar} />
                <Route path='/Inventory' component={Inventory} />
              </Switch>
        </Router>
      </>
  );
}

export default App;
