import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickNextSegment } from 'Actions/controls-actions';

class SegmentTimer extends Component {
  constructor(props) {
    super(props);

    this.onSegmentExpire = this.onSegmentExpire.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);

    this.state = {
      currentSegment: 0,
      playing: false,
    };
  }

  onSegmentExpire() {
    const { children } = this.props;
    const { currentSegment } = this.state;

    if (currentSegment < children.length - 1) {
      this.setState({ currentSegment: currentSegment + 1 })
    }
  }

  onStart() {
    this.setState({ playing: true });
  }

  onStop() {
    this.setState({ playing: false });
  }

  render() {
    const { children, onClickNextSegment } = this.props;
    const { currentSegment, playing } = this.state;

    return (
      <div>
        <p>Current Segment: {currentSegment + 1} of {children.length}</p>
        {currentSegment > 0 && (
          <button onClick={() => this.setState({currentSegment: currentSegment - 1})}>&lt;</button>
        )}
        {currentSegment < children.length - 1 && (
          <button onClick={onClickNextSegment}>&gt;</button>
        )}
        {playing ?
          <button onClick={this.onStop}>Stop</button> :
          <button onClick={this.onStart}>Start</button>
        }
        {playing && React.cloneElement(children[currentSegment], { onExpire: this.onSegmentExpire })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onClickNextSegment: () => dispatch(clickNextSegment),
});

export default connect(undefined, mapDispatchToProps)(SegmentTimer);
