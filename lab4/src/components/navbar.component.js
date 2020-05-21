import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">lab4</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Goods</Link>
          </li>
          <li className="navbar-item">
            <Link to="/spacestation" className="nav-link">SpaceStation</Link>
          </li> 
          <li className="navbar-item">
            <Link to="/planet" className="nav-link">Planets</Link>
          </li> 
        </ul>
        </div>
      </nav>
    );
  }
}