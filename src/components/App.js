import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SegmentTimer from 'Components/SegmentTimer';
import Segment from 'Components/Segment';
import segments from 'Components/segments';
import Controls from 'Components/Controls';

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
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Segment Timer" />
          <p>Choose segment:</p>
          <ul>
            {Object.keys(segments).map(segment => (
              <li key={segment}>
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

          <Controls
            selectedIndex={0}
            onSelect={x => console.log(x)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
