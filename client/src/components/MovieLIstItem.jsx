import React from 'react';

class MovieListItem extends React.Component {

  handleClick() {
    this.props.movie.watched = !this.props.movie.watched;
    this.props.handleItemToggle(this.props.movie);
  }

  render() {
    const movie = this.props.movie;

    return (
        <div>
          <div className='movie-list-item'>{movie.title}</div>
          <button
            onClick={this.handleClick.bind(this)}
          >{movie.watched ? 'Watched' : 'Not Watched'}</button>
        </div>
    )
  }
}

export default MovieListItem;