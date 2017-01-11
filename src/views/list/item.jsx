import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';

class ItemContent extends Component {
  render() {
    return (
      <div>
            <ListItem
              leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
      </div>
    );
  }
}

export default ItemContent;
