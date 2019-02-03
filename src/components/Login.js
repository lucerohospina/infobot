import React, { Component } from 'react';
import './../App.css';
import {
  NavLink,
} from 'react-router-dom'

class Login extends Component {
  // lifecycles
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("updating");
  }
  // functions here
  
  render() {
    return (
      <div className="main-container bg-secondary">
        <form className="login-form bg-white p-5 rounded position-relative">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="text-center">
            <NavLink to={"/Form"}  className="btn btn-primary">LOGIN</NavLink>
            <small className="d-block mt-2 text-center">Un producto de &copy;Canvia</small>
          </div>
        </form>
      </div>
    )
  }
}

// Default Props here

export default Login;