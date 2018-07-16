import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import SearchBar from './components/search_bar';

const youtubeToken = 'AIzaSyDxVl_CyaLufg9Fixrlsb-8zDM7c_TQWXU';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchBar youtubeToken={youtubeToken}/>
      </div>
    );
  }
}

export default App;
