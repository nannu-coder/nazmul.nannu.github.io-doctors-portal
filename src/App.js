import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Components/Home/HomePage/Home';
import NavBar from './Components/Home/NavBar/NavBar';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
