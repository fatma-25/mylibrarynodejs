import React from 'react';
import './homepage.css'

import axios from 'axios'

import MiniDrawer from "../Components/drawersession"
import Cardlib from "../Components/cardlib"
import './librarypage.css'


  export default class Librarypage extends React.Component {

    constructor(){
      super()
      this.state={
        booklibrary:[]
      }
    }

    getUser=()=>{
      const id= localStorage.getItem('id')
      axios.get(`/user/${id}`).then(res => {
        this.setState({ 
          booklibrary: res.data.booklibrary });
      });
    }
    componentDidMount=()=> {
      this.getUser()
    } 

    deleteBook = (idbook) => {



     const deletebook = this.state.booklibrary.filter(e=> e.id !== idbook )
   console.log(idbook)

   
      const id= localStorage.getItem('id')
      axios.put(`/user/deletebook/${id}`, deletebook ).then(res=> this.getUser())
     
      
    }; 

render(){
    return (
      <MiniDrawer>
       {/* <div> */}


       <div className="page-container">
     
      <div className="lib ">
    {this.state.booklibrary.map(e =>( 
    <div className="container">

      <Cardlib book={e}  deleteBook={this.deleteBook} />


      {console.log("hhhhhhhhh",this.state.booklibrary)}
   </div>
      ))}
      </div>
      </div>
  
       </MiniDrawer>
    
    )}}
    
