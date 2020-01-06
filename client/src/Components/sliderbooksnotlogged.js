import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";

import BookcardNotlogged from "./bookcardnotlogged"

import axios from 'axios'

export default class SliderbooksNotlogged extends React.Component {
// export default function Sliderbooks() {
constructor(){
  super()
  this.state={
    book:[],
  
  }
}
 responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      // breakpoint: { max: 4000, min: 0 },
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 900 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1
    }

    
  };

getBook=()=>{
    axios.get("/bookList/").then(res => {
      this.setState({ book: res.data });
    });
  }
  componentDidMount=()=> {
    this.getBook()
  } 

render(){

  return !this.state.book.length ? 'loading' : (
    <Carousel 
    responsive={this.responsive} 
    style={{border: 'solid', backgroundColor:'black',}}>
      {this.state.book.filter(e => e.title.toLowerCase().includes(this.props.bookname.toLowerCase())&& e.categorie.toLowerCase()===this.props.categorie).map((e) => ( 
  

        <BookcardNotlogged image={e.image} title={e.title} filename={e.filename} id={e._id} />
      ))}
    </Carousel>
  );
}}
