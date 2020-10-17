import React, { Component } from "react";
// import axios from "axios";

export default class CreateUser extends Component {
  render() {
    return (
      <div>
        <form
          class='text-center border border-light p-5'
          action='/users/register'
          method='POST'
        >
          <div class='form-group'>
            <label for='username'>Username</label>
            <input
              type='text'
              class='form-control'
              placeholder='Username'
              name='username'
              id='username'
              value=''
            ></input>
          </div>
          <div class='form-group'>
            <label for='password'>Password</label>
            <input
              type='password'
              class='form-control'
              placeholder='Password'
              name='password'
              id='password'
              value=''
            ></input>
          </div>
          <div class='form-group'>
            <label for='repeatPassword'>Repeat Password</label>
            <input
              type='password'
              class='form-control'
              placeholder='Repeat-Password'
              name='repeatpassword'
              id='repeatpassword'
              value=''
            ></input>
          </div>
          <button type='submit' class='btn btn-primary'>
            Register
          </button>
        </form>
      </div>
    );
  }
}
