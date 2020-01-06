import  {Fragment} from 'react';

import Sliderbooks from "../Components/sliderbooks"
// import Searchbar from "../Components/searchbar" 


import MiniDrawer from "../Components/drawersession"

import { makeStyles, useTheme } from '@material-ui/core/styles';


import Searchbar from "../Components/searchbar"

import './homepage.css'

import Coverflowbooks from "../Components/coverflowbooks"



import React, { Component } from 'react'

export default class Homepage extends Component {

  state={
    searchedValue:""
  }

  bookname =search=>{
    this.setState({
searchedValue:search
  })
  }

render(){
    return (
<MiniDrawer>
<Searchbar bookname={this.bookname} />

<h2 className='navigation'>All Books </h2>
<Coverflowbooks />
     <h2 className='navigation'>Action </h2>
            <Sliderbooks bookname={this.state.searchedValue}   categorie='action'/>
            {/* </div> */}
            <h2 className='navigation'>Romance </h2>
            <Sliderbooks bookname={this.state.searchedValue}   categorie='romance'/>
       
       

         </MiniDrawer>
         

    
      );
  }}
  
