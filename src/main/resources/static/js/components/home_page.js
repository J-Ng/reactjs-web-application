import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <div className="row extra-bottom-margin">
        <div className="col-xs-12 text-center">
          <h1 className="white">Welcome to Fulcrum Technologies Limited!!! test</h1>
        </div>
      </div>
    );
  }
}