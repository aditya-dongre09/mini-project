import React from 'react'
import Signup from './Signup';
import { AuthProvider } from '../context/AuthContext';
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile';
import Pickle from './Pickle';
import Ghee from './Ghee';
import Shrikhand from './Shrikhand';
import Syrup from './Syrup';
import Barfi from './Barfi';
import InstantMix from './Instant-Mix';


function App() {
  return( 

 
          
    <div>
      <Router>
      <AuthProvider> 
        <Switch>
          <PrivateRoute exact path="/" component ={Dashboard}/>
          <PrivateRoute path="/update-profile" component ={UpdateProfile}/>
          <Route path="/signup" component ={Signup}/>
          <Route path="/login" component ={Login}/>
          <Route path="/forgot-password" component ={ForgotPassword}/>
          <PrivateRoute path='/pickle' component ={Pickle}/>
          <PrivateRoute path='/ghee' component ={Ghee}/>
          <PrivateRoute path='/shrikhand' component ={Shrikhand}/>
          <PrivateRoute path='/syrup' component ={Syrup}/>
          <PrivateRoute path='/barfi' component ={Barfi}/>
          <PrivateRoute path='/InstantMix' component ={InstantMix}/>

        </Switch>
      </AuthProvider>
      </Router>
      </div>
  
  
  )
}

export default App;
