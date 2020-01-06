import React, { Component } from "react";

import { Switch, Link, Route, BrowserRouter,Redirect } from "react-router-dom"

import Signin from './Views/signin'
import Signup from './Views/signup'
import Readpdf from './Components/readdownpdf'
import './App.css'
import PrivateRoute from './PrivateRoute'

import Homepage from "../src/Views/homepage"
import Librarypage from "../src/Views/Librarypage"

import Uploadpage from "../src/Views/upoladpage"

import HomepageNotLoged from "../src/Views/homepagenologed"

import Settings from "./Views/settings"
import Profile from '../src/Views/profile'
import Overview from '../src/Views/overview'

export default class App extends Component {
  
 constructor(){
   super()
 }

 


 
  render() {
    return (
     <div>
       
 
      
      
      <BrowserRouter>
       <Switch>
 


       <PrivateRoute path='/session' component={Homepage}/>
  <Route path='/Library'  component={Librarypage}/>
  <Route path='/Home'  component={HomepageNotLoged}/>





       <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>

        <Route exact path="/readpdf" component={Readpdf}/>
        <Route exact path="/upload" component={Uploadpage}/>

        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/:id" component={Overview}/>
        

       </Switch>
       </BrowserRouter>  

      
            </div>

    )
    }}




