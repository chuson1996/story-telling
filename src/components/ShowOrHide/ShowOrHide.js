import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';

export default class ShowOrHide extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  onEnter = () => {
    this.setState({ show: true });
  };

  onLeave = ({ currentPosition }) => {
    if (currentPosition === 'below') {
      this.setState({ show: false });
    }
  };

  render() {
    return (
      <div>
        <Waypoint
          bottomOffset={300}
          onLeave={this.onLeave}
          onEnter={this.onEnter}/>
        {this.props.children({ show: this.state.show })}
      </div>
    );
  }
}
