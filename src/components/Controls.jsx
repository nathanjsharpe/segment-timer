import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import SkipPrev from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';

const Controls = ({ selectedIndex, onSelect }) => (
  <Paper zDepth={1} style={{position: 'fixed', bottom: 0}}>
    <BottomNavigation selectedIndex={selectedIndex}>
      <BottomNavigationItem
        label="Previous"
        icon={<SkipPrev />}
        onTouchTap={() => onSelect(1)}
      />
      <BottomNavigationItem
        label="Start"
        icon={<PlayArrow />}
        onTouchTap={() => onSelect(0)}
      />
      <BottomNavigationItem
        label="Next"
        icon={<SkipNext />}
        onTouchTap={() => onSelect(2)}
      />
    </BottomNavigation>
  </Paper>
);

export default Controls;
