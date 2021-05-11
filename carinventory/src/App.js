import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AddCar from './Pages/AddCar';
import Search from './Components/Search';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import NotFound from './Pages/NotFound';
import ViewPage from './Pages/ViewPage';

function App() {
  // const token = getToken();

  // function getToken() {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return 
  // }
    // if(!token) {
    //   return <Login/>
    // }
  return (
      <>
        <Router>
            <Navbar/>
             <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/addcar' component={AddCar} />
                <Route path='/inventory' component={Search} />
                <Route path='/login' component={Login} />
                <Route path='/logout' component={Logout} />
                <Route path='/view' component={ViewPage} />
                <Route path='*' component={NotFound} />
              </Switch>
        </Router>
      </>
  );
}

export default App;
