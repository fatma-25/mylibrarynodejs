import React, { Component } from 'react'
import axios from "axios";
import {Link,Redirect,withRouter} from "react-router-dom"


export default class Signup extends Component {

    state = { loginR: "", emailR: "", passwordR: "", dateR:"", signup:false,alert:false };
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
       
      });
    };

    register = () => {

        this.setState({
            alert:!this.state.alert
        })
        const { loginR, emailR, passwordR,dateR } = this.state;
      
        if(loginR===""|| emailR===""|| passwordR===""||dateR==="") 
        return console.log("chaine vide") 
        axios
          .post("/user/register", {
            login: loginR,
            email: emailR,
            password: passwordR,
            date: dateR
          })
          .then(res =>
            {
            
            console.log(res.data)
            if(res.data._message!="user validation failed")
            this.setState({
                signup:!this.state.signup
            })
          });

        }
    

        
    render() {

        if(this.state.signup){
            return <Redirect to="/signin" />
        }
    
        return (
            <div className="container" style={{padding :50}}>
                {this.state.alert ?
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>SESSION HAS BEEN CREATED SUCCESFULY</strong> You should logged to acces into u're session
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> : null
}
<div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">

                                <form className="form-horizontal">

                                <div className="form-group">
                                        <label for="username" className="cols-sm-2 control-label">Username</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                                <input type="text" className="form-control" name="loginR" onChange={this.handleChange} placeholder="Enter your Username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label  for="email" className="cols-sm-2 control-label">Your Email</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                <input type="email" className="form-control" name="emailR" onChange={this.handleChange} placeholder="Enter your Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="username" className="cols-sm-2 control-label">Date of birth</label>
                                        <div class="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                                <input type="date" className="form-control"  id="start" name="dateR"  onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" className="cols-sm-2 control-label">Password</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="password" className="form-control" id="validationDefaultUsername" name="passwordR" onChange={this.handleChange} placeholder="Enter your Password" required/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="form-group ">
                                    
                                        <button type="button" onClick={this.register} className="btn btn-primary btn-lg btn-block login-button">Register</button>
                                    
                                    </div>


                                </form>
                            </div>

                        </div>
                    </div>
                </div>
</div>
           
        )
    }
}

