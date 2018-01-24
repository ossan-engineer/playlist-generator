import React, { Component } from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends Component {
  render() {
    return (
      <div className='TrackList'>
        {this.props.tracks ? this.props.tracks.map((track) => {
          return (
            <Track
              key={track.id}
              name={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              onAdd={() => this.props.onAdd(track)}
              onRemove={() => this.props.onRemove(track)}
              isRemoval={this.props.isRemoval}
            />
          );
        }) : null}
      </div>
    );
  }
}

export default TrackList;
