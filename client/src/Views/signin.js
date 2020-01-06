import React, { Component } from 'react'
import axios from "axios";
import {Redirect,Link,withRouter} from "react-router-dom"
import '../signin.css'




import AccountCircle from '@material-ui/icons/AccountCircle';


export default class Signin extends Component {

  state = { email: "", password: "", loggedin:false };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
     
    });
  };

  login = () => {
    const { password, email } = this.state;
    axios.post("/user/login", { password, email }).then(res =>
      //  cookies
    { 
      localStorage.setItem("token", res.data.token)
      console.log(res.data)
      localStorage.setItem("id", res.data.id)
  if(res.data.token)
    this.setState({
        loggedin:!this.state.loggedin })
        else   {localStorage.removeItem('token')
        // localStorage.removeItem('id')
      }
    
      
    }
    );



  };
  configtoken = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  };
  componentDidMount() {
    axios
      .get("/user/current", this.configtoken())
      .then(res =>{ localStorage.setItem('id',res.data._id);
      // console.log(localStorage.getItem('user'))
    })
      .catch(err => console.log(err.response.data))
  }

    render() {

      if(this.state.loggedin){
        return <Redirect to="/session" />
    }

        return (
       
               <div className="wrapper fadeInDown" style={{padding: 100}}>
  <div id="formContent">
   <div className="fadeIn">
      {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
      <AccountCircle />
    </div>

   
    <form>
      <input type="text" id="login" className="fadeIn second" 
            name="email"
            onChange={this.handleChange}
            placeholder="email" />
            
      <input type="text"  className="fadeIn second" 
            name="password"
            onChange={this.handleChange}
            placeholder="password" />

      <input type="button" className="fadeIn fourth" onClick={this.login} value="Log In" />
    </form>

 
    <div id="formFooter">
 <Link to={`/signup`}>Sign up</Link> 
    </div>

                

 </div>
 </div>
         
        )
    }
}

