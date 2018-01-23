import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
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
        {
          id: '004',
          name: 'katana',
          artist: 'musashi',
          album: 'Japanese Legends',
        },
      ],
      playlistName: 'Default',
      playlistTracks: [
        {
          id: '002',
          name: 'sakura',
          artist: 'hanako',
          album: 'Japanese Flowers',
        },
      ],
    };
  }

  addTrack = (track) => {
    const newPlaylistTracks = this.state.playlistTracks.slice();
    const isRegistered = this.state.playlistTracks.some((playlist) => {
      return track.id === playlist.id;
    });

    if (isRegistered) {
      console.log('ERROR');
      return;
    }

    newPlaylistTracks.push(track);
    this.setState({
      playlistTracks: newPlaylistTracks,
    });
  }

  removeTrack = (track) => {
    const newPlaylistTracks = this.state.playlistTracks.slice().filter(playlistTrack => track.id !== playlistTrack.id);

    this.setState({
      playlistTracks: newPlaylistTracks,
    });

    console.log('REMOVE');
  }

  updatePlaylistName = (name) => {
    this.setState({
      playlistName: name,
    });
  }

  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks;

    console.log(trackURIs);
    console.log(this.state.playlistName);
  }

  search = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Playlist<span className='highlight'>G</span>enerator</h1>
        <div className='App'>
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
