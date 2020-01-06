
import Navbar from "../Components/navbar"
import './homepage.css'

import Footerpage from "../Components/footer"

import Coverflowbooks from "../Components/coverflowbooks"
import SliderbooksNotlogged from "../Components/sliderbooksnotlogged"

import Searchbar from "../Components/searchbar"


import React, { Component } from 'react'

export default class HomepageNotLoged extends Component {

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

        <main>
       

          <Navbar />

          <Searchbar bookname={this.bookname}  />
          <h2 className='navigation'>All Books </h2>

<Coverflowbooks />

    <div style={{margin : '0 100px'}}>
      
    <h2 className='navigation'>Action </h2>
            <SliderbooksNotlogged bookname={this.state.searchedValue}   categorie='action'/>
            <h2 className='navigation'>Romance </h2>
            <SliderbooksNotlogged bookname={this.state.searchedValue}   categorie='romance' />
          </div>

     
     


<div>
  <Footerpage/>
  </div>
         </main> 

);
}}


 
  
  
