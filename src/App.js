import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './shared/Header';
import { RentalList } from './components/rental/RentalList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className='container'>
          <RentalList></RentalList>
        </div>
      </div>
    );
  }
}

export default App;
