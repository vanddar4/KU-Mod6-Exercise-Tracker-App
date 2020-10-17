import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

  render() {
    return (
      <footer className="page-footer font-small">
        <div class="footer-copyright text-center py-3">© 2020
          <Link to="/" className="footer-brand"> Jared and Darren Productions</Link>
        </div>
      </footer>
    );
  }
}