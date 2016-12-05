import React, { Component } from 'react';
import SegmentTimer from './SegmentTimer';
import Segment from './Segment';
import segments from './segments';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSelectSegment = this.onSelectSegment.bind(this);

    this.state = {};
  }

  onSelectSegment(e, currentSegment) {
    e.preventDefault();
    this.setState({ currentSegment })
  }

  render() {
    const { currentSegment } = this.state;

    return (
      <div className="App">
        <h2>Segment Timer</h2>
        <p>Choose segment:</p>
        <ul>
          {Object.keys(segments).map(segment => (
            <li>
              <a href="#" onClick={e => this.onSelectSegment(e, segment)}>
                {segment}
              </a>
            </li>
          ))}
        </ul>

        {currentSegment && (
          <div className="content">
            <h2>{currentSegment}</h2>
            <SegmentTimer>
              {segments[currentSegment].map((segment, index) => (
                <Segment key={index} {...segment} />
              ))}
            </SegmentTimer>
          </div>
        )}
      </div>
    );
  }
}

export default App;
