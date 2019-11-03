import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
	  <nav className="navbar navbar-inverse">
	    <div className="container">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="https://avanteratechnologies.com">
		      <img className="logo" src="/images/avantera-logo.png" width="111" height="37"/>
		      </a>
		    </div>
		      <p className="navbar-text navbar-left">Home</p>
		      <p className="navbar-text navbar-left">About</p>
		      <p className="navbar-text navbar-right">Demo</p>
	    </div>
	  </nav>
    );
  }
}