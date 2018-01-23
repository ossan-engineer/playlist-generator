import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
  }

  // removeTrack = id => {
  //   this.props.onRemove(id);
  // }

  renderAction = isRemoval => isRemoval
    ? (
      <a
        className='Track-action'
        onClick={this.props.onRemove}
      >
        -
      </a>
    ) : (
      <a
        className='Track-action'
        onClick={this.props.onAdd}
      >
        +
      </a>
    );

  render() {
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3>
            {this.props.name}
          </h3>
          <p>
            {this.props.artist}
            |
            {this.props.album}
          </p>
        </div>
        {this.renderAction(this.props.isRemoval)}
      </div>
    );
  }
}

export default Track;
