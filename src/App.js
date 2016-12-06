import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SegmentTimer from 'Components/SegmentTimer';
import Segment from 'Components/Segment';
import programs from 'Util/programs';
import Controls from 'Components/Controls';
import { clickNextSegment, selectProgram } from 'Actions/controls-actions';

const App = ({
  currentProgram,
  currentSegment,
  onClickNextSegment,
  onSelectProgram
}) => (
  <MuiThemeProvider>
    <div className="App">
      <AppBar title="Segment Timer" />
      <p>Choose programs:</p>
      <ul>
        {Object.keys(programs).map(programs => (
          <li key={programs}>
            <a href="#" onClick={e => onSelectProgram(e, programs)}>
              {programs}
            </a>
          </li>
        ))}
      </ul>

      {currentProgram && (
        <div className="content">
          <h2>{currentProgram}</h2>
          <SegmentTimer>
            {programs[currentProgram].map((segment, index) => (
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

const mapStateToProps = state => ({
  currentProgram: state.segment.currentProgram,
  currentSegment: state.segment.currentSegment,
});

const mapDispatchToProps = dispatch => ({
  onClickNextSegment: () => dispatch(clickNextSegment()),
  onSelectProgram: (e, program) => {
    e.preventDefault();
    dispatch(selectProgram(program));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
