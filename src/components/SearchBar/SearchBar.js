import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  handleTermChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Enter A Song, Album, or Artist'
          onChange={this.handleTermChange}
        />
        <a onClick={this.props.onSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
