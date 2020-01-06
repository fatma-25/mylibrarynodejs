import React, { Component } from "react";
import "./profile.css";
import Bookcard from "../Components/bookcard";
import axios from 'axios'

import Cardprofile from "../Components/cardprofile"

import MiniDrawer from "../Components/drawersession"

import BookcardNotlogged from "../Components/bookcardnotlogged"
// import Bookcard from "./bookcard"

export default class Profile extends Component {

state={
  booklibrary:[],
  user:[]

}





getUser = () => {
  const id = localStorage.getItem("id");
  axios.get(`/user/${id}`).then(res => {
    this.setState({
      user: res.data,
      booklibrary:res.data.booklibrary
    });
    console.log("user", res.data);
  });
};

componentDidMount = () => {
  this.getUser();
};

  render() {
    return (
      <MiniDrawer>
      <div>
            
        <div class="container-fluid first d-none d-xl-block d-lg-block d-md-block d-xl-none">
          <h1 style={{color: "white", padding: "200px"}}>“{this.state.user.quote}”</h1>
        </div>

        <div className="container-fluid second">
          <div className="container-fluid all ">
            <div className="col-lg-4 p-0 infos-block1 ">
              <img
                className="img-fluid"
                // src={this.state.user.imageUser}
                src={`./image/${this.state.user.imageUser}`} 
              />
              <div className="infos-prof  ">
                <h2>
                  {this.state.user.login}
                  <br />
                </h2>
               
                <p style={{ fontWeight: "bold" }}>favorit quote :</p> “{this.state.user.quote}”
              </div>
            </div>
            <div className="col-lg-8 infos-section" >
              <div className="infos-block2" >
                <h3>My Library</h3>

               
                <div className="imgs" >
                {this.state.booklibrary.map(e =><div >
              
                  <BookcardNotlogged image={e.image} title={e.title} filename={e.filename} id={e._id} />
 {/* <Cardprofile book={e} /> */}

               </div>)}
                 </div>

              </div>
            
            </div>
          </div>
        </div>
      </div>
      </MiniDrawer>
    );
  }
}
