import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3>
            {this.props.name}
          </h3>
          <p>
            {this.props.artist}
          </p>
        </div>
        <a className='Track-action'>
          {this.props.album}
        </a>
      </div>
    );
  }
}

export default Track;
