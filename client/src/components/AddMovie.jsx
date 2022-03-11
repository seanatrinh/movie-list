import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAdd({
      title: this.state.title,
      watched: false
    })
    this.setState({
      title: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Add Movie'
        />
      </form>

    )
  }
}

export default AddMovie;