import React from "react";

import Item from '../Item/Item'

class InfiniteList extends React.Component {
  constructor() {
    super();
    this.state = {
      //
    };
    //this.checkPosition = this.checkPosition.bind(this)
    //this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  componentDidMount() {
        
  }

  render( ) {
    
    
    return (
      <div>
        <Item />
      </div>
    )}

}

export default InfiniteList;