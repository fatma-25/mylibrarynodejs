import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import './coverflow.css'

import axios from "axios"

class Coverflowbooks extends Component {
    constructor(props){
      super(props)
      this.state={
   books:[]
      }
    }
    
    
    getBook=()=>{
        axios.get("/bookList/").then(res => {
          this.setState({ books: res.data });
        });
      }
      componentDidMount=()=> {
        this.getBook()
      
      } 
   

      render() {
        var fn = function () {
            /* do you want */  
        };
      
      
        
        return (

  <StyleRoot>
  <Coverflow
    // width={960}
    // height={480}
    // displayQuantityOfSide={2}
    // navigation={true}
    enableHeading={true}
    // clickable={true}
    active={'middle'}
    displayQuantityOfSide={2}
    navigation={false}
    // enableHeading={false}
    media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '220px'
        },
        '@media (min-width: 900px)': {
          width: '1045px',
          height: '350px',
        //   width: '1115px',
        //  height: '350px',
        background: 'none',
        marginTop:30,
        
    }
}}

  >
   

        {this.state.books.map(e=><div><img style={{height:180,width : 150}}  src={`./image/${e.image}`}/><p style={{textAlign:"center"}}>{e.title}</p></div>)}

      </Coverflow>

  </StyleRoot>

        );
    }}

      export default Coverflowbooks


      