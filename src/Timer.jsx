import React, { Component } from 'react';

class Timer extends Component {
  static defaultProps = {
    onExpire: () => {},
  }

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);

    this.state = { currentSecs: props.secs }
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    const currentSecs = this.state.currentSecs - 1;
    if (currentSecs <= 0) {
      this.props.onExpire();
      this.setState({ currentSecs: 0 });
    } else {
      this.setState({ currentSecs })
    }
  }

  render() {
    const { currentSecs } = this.state;

    return (
      <div>{currentSecs}</div>
    )
  }
}

export default Timer;
