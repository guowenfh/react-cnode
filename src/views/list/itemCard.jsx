import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
class ItemCard extends Component {
  render() {
    let {title,author,id,reply_count,visit_count}  = this.props;
    return (
      <Link to={'/details/'+id}>
        <ListItem
          leftAvatar={<Avatar src={author.avatar_url} />}
          primaryText={
            <p>{title}</p>
          }
          secondaryText={
            <div>
              <span style={{color: darkBlack}}>{author.loginname}</span>
              <div>
                <span>{reply_count}</span>/<span>{visit_count}</span>
              </div>
            </div>
          }
          secondaryTextLines={2}
          innerDivStyle={{'padding':'0 15px 5px 72px'}}
          nestedListStyle={{'padding':'0 5px 5px 72px'}}
        />
        <Divider inset={true} />
      </Link>
    );
  }
}

export default ItemCard
