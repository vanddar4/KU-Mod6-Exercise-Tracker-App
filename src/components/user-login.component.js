import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
    this.state = {
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();    
    const userNameAndPassword = {
      username: this.state.username,
      password: this.state.password,
    };    
      const response = await axios.post(
      'http://localhost:5000/users/login',
      userNameAndPassword
    );
    localStorage.setItem("userNameAndPassword", response.config.data);
    console.log(response);    

    this.setState({
      username: "",
    });    

    this.setState({
      password: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form
          className='text-center border border-light p-5'
          onSubmit={this.onSubmit}
        >
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              name='username'
              required={true}
              value={this.state.username || ""}
              onChange={this.onChangeUsername}
            ></input>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              required={true}
              value={this.state.password || ""}
              onChange={this.onChangePassword}
            ></input>
          </div>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    );
  }
}
