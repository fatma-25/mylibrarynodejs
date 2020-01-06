
import "./bookcard.scss"
 import React, { Component } from 'react'

export default class BookcardNotlogged extends Component {




  render() {
    return (
<figure class="snip0016">
    <img src={`./image/${this.props.image}`} />
    <figcaption>
  
    <p>{this.props.categorie}</p>

    
   
      <p>{this.props.title}</p>
      {/* <p>	<RatingBook className='rating'ratvalue={this.props.raiting}/></p> */}
    </figcaption>
    
  </figure>

 )
}}

