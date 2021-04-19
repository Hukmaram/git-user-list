import React, {useState} from "react"
import { Provider } from 'react-redux'
import './App.css';
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Pages/Dahsboard";
import Details from "./Pages/Details";
import store from './Redux/store'
function App() {
  const [user,setUser]=useState(null);
  return (
    <Router>
      <Provider store={store}>
      <Switch>
       <Route exact path="/" component={Login} />
       <Route exact path="/dashboard" component={Dashboard} />
       <Route exact path="/details" component={Details} />
      </Switch>
      </Provider>
    </Router> 
   
  );
}

export default App;
