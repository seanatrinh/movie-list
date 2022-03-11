import React from 'react';

class WatchedButtons extends React.Component {
  handleWatchClick(event) {
    this.props.handleWatchButtonToggle(event.target.value)
  }

  render() {
    return(
      <div>
        <button
          onClick={this.handleWatchClick.bind(this)}
          value='true'
        >To Watch</button>
        <button
          onClick={this.handleWatchClick.bind(this)}
          value='false'
        >Watched</button>
      </div>
    )
  }
}

export default WatchedButtons;