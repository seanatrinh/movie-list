import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <input type='submit' value='Search'/>
      </form>
    )
  }
}

export default Search;