
import axios from "axios"
import "./bookcard.scss"
import {Link} from "react-router-dom"
import RatingBook from './rating';


import React, { Component } from 'react'

export default class Bookcard extends Component {

 state={
   alert:false
 }

addbook=(idbook,props)=>{

  this.setState({
    alert:!this.state.alert
  })
 
       const id= localStorage.getItem('id')
  axios.put(`/user/edit/${id}`,props).then(res=>console.log("ffff",res.data))
  }


  render() {
    return (

<div>
<div class="modal-body">
{ this.state.alert ?

 <div>
  <h5>Book Added To Library</h5>
 
 </div> : null }
</div>


<figure class="snip0016">
    <img src={`./image/${this.props.image}`} />
    <figcaption>
    <p>{this.props.categorie}</p>

  
    <div style={{display:"flex"}} className="btn" >

      <Link to={`${this.props.id}`} ><button  >View descrption</button></Link> 
      <button onClick={()=>this.addbook(this.props._id,this.props)}>Add to  library</button>
     
      </div>
      <p>{this.props.title}</p>
      {/* <p>	<RatingBook className='rating'ratvalue={this.props.raiting}/></p> */}
    </figcaption>
    
  </figure>
  </div>
 )
}}

