import React from "react";

import Item from '../Item/Item'

class InfiniteList extends React.Component {
  constructor() {
    super();
    this.state = {
      boxList: [
        { color:'red', animation: 1, number: 1},
        { color:'red', animation: 1, number: 2},
        { color:'red', animation: 1, number: 3},
        { color:'red', animation: 1, number: 4},
        { color:'red', animation: 1, number: 5},
        { color:'red', animation: 1, number: 6},
      ]
    };
    //this.checkPosition = this.checkPosition.bind(this)
    //this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  componentDidMount() {
    const listBody = document.getElementById('listBody')
    listBody.scrollTop = 800
    listBody.addEventListener('scroll', this.onScroll, false);
  }

  render( ) {
    const {boxList} = this.state;
    
    return (
      <div id='listBody'>
        {boxList.map( box => {
          return <Item key={box.number} number={box.number}/>
        })}
      </div>
    )}

}

export default InfiniteList;