import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Main/Navigation";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import LogOut from "./components/User/LogOut";
import TodoList from './components/Main/TodoList';

function App() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/todolist">
            <TodoList/>
          </Route>
          
        </Switch>
      </Router>
            
            
       
      
    );
  }


export default App;