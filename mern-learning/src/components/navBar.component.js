import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Help Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/helpList" className="nav-link">Help Requests</Link>
          </li>
          <li className="navbar-item">
          <Link to="/update/:id" className="nav-link">UpdateHelp</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Help</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}