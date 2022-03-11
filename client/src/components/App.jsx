import React from 'react';
import AddMovie from './AddMovie.jsx'
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import WatchedButtons from './WatchedButtons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : [],
      searchValue: '',
      watchedMovies: [],
      showToWatch: true
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  // handle movie add
  handleAdd(movie) {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  // handle movie search
  handleSearch(searchVal) {
    var filteredMovies = this.state.movies.filter(movie => movie.title.includes(searchVal));

    if (filteredMovies.length === 0) {
      this.setState({
        movies: [{title: 'No movies found!'}]
      });
    } else {
      this.setState({
        movies : filteredMovies
      });
    }
  }

  // handle movie list item toggle
  handleItemToggle(movie) {
    if(movie.watched) {
      var filtered = this.state.movies.filter(arrayMovie => !arrayMovie.title.includes(movie.title));
      var newWatched = [...this.state.watchedMovies, movie];

      this.setState({
         movies: filtered,
         watchedMovies: newWatched
       })
      } else {
      var filtered = this.state.watchedMovies.filter(arrayMovie => !arrayMovie.title.includes(movie.title));
      var newMovies = [...this.state.movies, movie];

      this.setState({
         movies: newMovies,
         watchedMovies: filtered
       })
    }
  }

  // handle watch button toggle
  handleWatchButtonToggle(booleanStr) {
    if (booleanStr === 'true' && !this.state.showToWatch) {
      this.setState({showToWatch: true});
    } else if (booleanStr === 'false' && this.state.showToWatch) {
      this.setState({showToWatch: false});
    }
  }

  render() {
    const showToWatch = this.state.showToWatch;
    let movieList;
    if (showToWatch) {
      movieList = <MovieList
      movies={this.state.movies}
      handleItemToggle={this.handleItemToggle.bind(this)}
    />
    } else {
      movieList = <MovieList
          movies={this.state.watchedMovies}
          handleItemToggle={this.handleItemToggle.bind(this)}
        />
    }

    // console.log('to watch:', this.state.movies, 'watched:', this.state.watchedMovies);
    // console.log('***************');


    return (
      <div>
        <AddMovie
          handleAdd={this.handleAdd}
        />
        <Search
          handleSearch={this.handleSearch.bind(this)}
          searchValue={this.state.searchValue}
        />
        <WatchedButtons
          handleWatchButtonToggle={this.handleWatchButtonToggle.bind(this)}
        />
        {movieList}
      </div>
    )
  }
}

export default App;