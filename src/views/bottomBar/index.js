import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

class bottomBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tabs>
        <Tab icon={<ActionFlightTakeoff />} />
        <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
        <Tab icon={<ActionFlightTakeoff />} />
        <Tab icon={<ActionFlightTakeoff />} />
      </Tabs>
    );
  }
}

export default bottomBar;
