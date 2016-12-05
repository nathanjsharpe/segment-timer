import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SegmentTimer from './SegmentTimer';
import Segment from './Segment';
import { testSegments as segments } from './segments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Segment Timer</h2>
        </div>
        <SegmentTimer>
          {segments.map((segment, index) => (
            <Segment key={index} {...segment} />
          ))}
        </SegmentTimer>
      </div>
    );
  }
}

export default App;
