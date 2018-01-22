import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: '001',
          name: 'kimigayo',
          artist: 'taro',
          album: 'Japanese Songs',
        },
        {
          id: '002',
          name: 'sakura',
          artist: 'hanako',
          album: 'Japanese Flowers',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Playlist<span className='highlight'>G</span>enerator</h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
