import React, { Component } from 'react';
import './App.css';
import PropTypes  from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes =  {
    title: PropTypes.string.isRequired
}
export default App;
