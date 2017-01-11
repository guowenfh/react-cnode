import React,{ Component } from 'react';
import {List} from 'material-ui/List';

import Tabbar from './tabBar';
import ItemContent from './item';
class ListMain extends Component {
    constructor(props) {
      super(props);
      this.state = {open: false};
    }
  handleToggle = () => this.setState({open: !this.state.open});
CLickc(){
  console.error(this.props.router);
}
  render() {
    return (
      <div style={{'paddingTop':'50px'}}>
        <Tabbar />
        <div className="index">
          <List>
            {[1,2,3,4,5,6,7,8,9].map((item,index)=>{
              return <ItemContent key={index}/>
            })}
          </List>
        </div>
      </div>
    );
  }
}


export default ListMain;
