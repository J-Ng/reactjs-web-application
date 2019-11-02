import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export class App extends Component {
  getInitialState() {
    return { items: [], products: [] };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));