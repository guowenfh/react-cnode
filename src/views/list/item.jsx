import React, {Component} from 'react';
import {List,ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack,lightBlack } from 'material-ui/styles/colors';
import {Link} from 'react-router';

class ItemCard extends Component {
  render() {
    let {title,author,id,reply_count,visit_count}  = this.props;
    return (
      <Link to='/message'>
        <ListItem
          leftAvatar={<Avatar src={author.avatar_url} />}
          primaryText={
            <p>{title}</p>
          }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>{author.loginname}</span>
              <div>
                <span>{reply_count}</span>/<span>{visit_count}</span>
              </div>
            </p>
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

class ItemContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  <List style={{'padding':0}}>
        {this.props.pagesList.map((item,index) => {
          return <ItemCard key={ item.id } index={index+1}{...item}/>
        })}
      </List>
    );
  }
}

export default ItemContent;
