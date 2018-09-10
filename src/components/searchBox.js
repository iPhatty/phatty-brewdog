import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBox extends Component {
  state = {
    searchTerm: '',
    error: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const search = this.state.searchTerm;
    if (search.trim().length === 0) {
      this.setState({
        error: true
      });
      return null;
    }
    this.setState({
      error: false
    });
  };

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
      error: false
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          error={this.state.error}
          action={{ icon: 'search' }}
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
          name="searchTerm"
          required
        />
      </form>
    );
  }
}

export default SearchBox;
