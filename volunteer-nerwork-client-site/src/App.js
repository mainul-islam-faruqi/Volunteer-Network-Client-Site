import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import VolunteerRegistration from './components/VolunteerRegistration/VolunteerRegistration';
import Login from './components/Login/Login';
import AddEvent from './components/AddEvent/AddEvent';
import EventTasks from './components/EventTasks/EventTasks';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
   
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/:orgName/registration">
            <VolunteerRegistration/>
          </PrivateRoute>
          <Route path="/addevent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/eventtasks">
            <EventTasks/>
          </Route>
          <Route path='/admin'>
            <Admin/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    
    </UserContext.Provider>
  );
}

export default App;
