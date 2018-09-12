import React, { Component } from 'react';

class SearchBox extends Component {
  state = {
    searchTerm: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm.trim().length === 0) {
      return null;
    }
    this.props.getData(searchTerm);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="form--input"
          placeholder="Search here..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
          name="searchTerm"
          required
        />
        <button className="form--button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default SearchBox;
