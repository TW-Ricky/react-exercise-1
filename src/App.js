import React, { Component } from 'react';
import './App.scss';
import './main.css';
import HeadImg from './component/HeadImg';
import Main from './component/Main';

class App extends Component {
  render() {
    return (
      <div className="main">
        <HeadImg></HeadImg>
        <Main></Main>
      </div>
    );
  }
}

export default App;
