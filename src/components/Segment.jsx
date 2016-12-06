import React, { Component } from 'react';
import { say } from 'Util/speech';

class Segment extends Component {
  static defaultProps = {
    onExpire: () => {},
  }

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);

    this.state = { currentSecs: props.secs }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    say(this.props.caption);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const currentSecs = this.state.currentSecs - 1;
    if (currentSecs <= 0) {
      this.props.onExpire();
      clearInterval(this.interval);
      this.setState({ currentSecs: 0 });
    } else {
      this.setState({ currentSecs })
    }
  }

  render() {
    const { caption } = this.props;
    const { currentSecs } = this.state;

    return (
      <div>
        <div>{caption}</div>
        {currentSecs}
      </div>
    )
  }
}

export default Segment;
