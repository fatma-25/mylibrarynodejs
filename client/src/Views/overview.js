import React, { Component } from "react";
import "./overview.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon
} from "react-share";
import axios from 'axios'


import MiniDrawer from "../Components/drawersession"


let name = "Hassen Ben Mbarek";
let quote = "There is no great mind without a touch of madness";

export default class Overview extends Component {
  constructor(props){
    super(props)
  this.state={
    book:[]
  }
  console.log("paramsss",this.props.match.params.id)
  }
  getBook=()=>{
   const id = this.props.match.params.id
    axios.get(`/bookList/${id}`).then(res => {
      this.setState({ book: res.data });
      console.log("resssdata",this.state.book)
    
    });
    console.log("idboooook",id)
  }
  componentDidMount=()=> {
    this.getBook()
  } 

  render() {
    
    const shareUrl = "wwww.google.com";
    const title = window.title;
    return (

      <MiniDrawer>
      <div className="allblocks  col-sm-12">



 

        <div className="container-fluid col-lg-12 ">
          <div className="container block-one p-0 ">

             
              {console.log('image333333',this.state.book.image)}

<img className="img-fluid" src={`./image/${this.state.book.image}`}  />

            <div className="details ">
           
              <br />
            
              <div className="icons">
                <FacebookShareButton url={shareUrl} quote={title}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <RedditShareButton url={shareUrl} quote={title}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <TwitterShareButton url={shareUrl} quote={title}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} quote={title}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <PinterestShareButton url={shareUrl} quote={title}>
                  <PinterestIcon size={32} round />
                </PinterestShareButton>

              </div>
            </div>
          </div>
          <div className="outerblock p-0 col-lg-8">
            <div className="block-two">
            <h3> {this.state.book.title}</h3>
            
            <p>
          {this.state.book.description}
            </p>
            </div>
         
          </div>
        </div> 

      </div>
      </MiniDrawer>
    );
  }
}



