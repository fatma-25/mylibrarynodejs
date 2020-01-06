import React, { Component } from "react";
import MiniDrawer from "../Components/drawersession";
import axios from "axios";

export default class Settings extends Component {
  state = {
    edituser: {
    
      quote:"",
      login: "",
      email: "",
      imageUser:""
    },
  
    user: [],
    alert:false
  };

  getUser = () => {
    const id = localStorage.getItem("id");
    axios.get(`/user/${id}`).then(res => {
      this.setState({
        user: res.data
      });
      console.log("user", res.data);
    });
  };

  componentDidMount = () => {
    this.getUser();
  };

  handleChangeimage = e => {
    //Get current selected or dropped file (it gives you the ability to load multiple images).
    this.setState({
      imageUser: e.currentTarget.files[0]
    });
    // console.log(this.state.image)
    const imageUser = e.currentTarget.files[0];
    console.log("imaaaage", imageUser);
    // alert(imageUser.name);

    this.setState({edituser:{...this.state.edituser,imageUser:imageUser.name}})
console.log(this.state.edituser)
    if (imageUser) {
      //Create instance
      let fileReader = new FileReader();
      //Register event listeners

      //Read the file as a Data URL (which gonna give you a base64 encoded image data)
      fileReader.readAsDataURL(imageUser);
    }
  };

  handleChange = e => {
    this.setState({
      edituser: {
        ...this.state.edituser,
   
        [e.target.name]: e.target.value
      }



    });
    console.log('',this.state.imageUser)
  };
  handleClick = (user) => {

 this.setState({
  alert:!this.state.alert
 })
    const fd = new FormData();
    fd.append("file", this.state.imageUser);
    axios.post("/uploadimage", fd).then(res => console.log(res.data));

    const id = localStorage.getItem("id");
    axios
      .put(`/user/edituser/${id}`, user)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <MiniDrawer>
         
        <div class="container">

        {this.state.alert ?
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>PRPFILE MODIFY</strong> You should check u're profil
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> : null
}
          {/* <br />
          <br /> */}
          <div class="row" id="main">
            <div class="col-md-2 well" />
            <div class="col-md-7 well" id="rightPanel">
              <div class="row">
                <div class="col-md-12">
                  <div>
                    {/* <img
                      style={{
                        width: 120,
                        position: "relative",
                        display: "inline-block",
                        boxShadow:
                          " 0 14px 28px rgba(0,0,0,-0.75), 0 10px 10px rgba(0,0,0,0.22)"
                      }}
                      src="http://lorempixel.com/200/200/abstract/1/"
                      alt="profile"
                      className="rounded-circle"
                    />
                    <button
                      type="button"
                      class="btn btn-white btn-circle btn-sm"
                    >
                      <span className=" fa fa-pencil"></span>
                    </button> */}

                    {/* <h2 style={{color:'black'}}>AYA LETAIEF</h2> */}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <form role="form">
                    <h2>Edit your profile</h2>
                    <hr class="colorgraph" />
                    <div class="row">
                      <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group">
                          <label style={{ fontWeight: "bold" }}>Name</label>
                          <input
                            type="text"
                            className="form-control input-lg"
                            defaultValue={this.state.user.login}
                            name="login"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group">
                          <label style={{ fontWeight: "bold" }}> Quote</label>
                          <input
                            type="text"
                            className="form-control input-lg"
                            defaultValue={this.state.user.quote}
                            tabindex="6"
                            name="quote"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label style={{ fontWeight: "bold" }}> email</label>
                      <input
                        type="text"
                        className="form-control input-lg"
                        defaultValue={this.state.user.email}
                        tabindex="4"
                        name="email"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div class="row">
             

                       <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group">
                          <input
                            type="file"
                            class="form-control-file"
                            id="exampleFormControlFile1"
                            name="imageUser"
                            onChange={this.handleChangeimage}
                          />
                        </div>
                      </div> 
                      
                    </div>
                    <hr class="colorgraph" />
                    <div class="row">
                      <div class="col-xs-12 col-md-6"></div>
                      <div class="col-xs-12 col-md-6">
                        <button
                          class="btn btn-secondary btn-block btn-lg"
                          onClick={() =>
                            this.handleClick({ ...this.state.edituser })
                          }
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-2 well" />
          </div>
        </div>
      </MiniDrawer>
    );
  }
}
