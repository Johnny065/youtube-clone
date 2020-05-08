import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h3 style={{ color: '#FF0000' }}>YouTube Clone</h3>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
