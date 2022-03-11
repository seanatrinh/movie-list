import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map(
          (movie, i) => <MovieListItem
                          key={i}
                          movie={movie}
                          handleItemToggle={this.props.handleItemToggle}
                        />
        )}
      </div>
    )
  }
}

export default MovieList;