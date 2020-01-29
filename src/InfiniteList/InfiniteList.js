import React from "react";
import Item from '../Item/Item'

class InfiniteList extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [
        { number: 1},
        { number: 2},
        { number: 3},
        { number: 4},
        { number: 5},
        { number: 6},
        { number: 7},
        { number: 8},
      ],
      itemIndex: 8
    };
    this.onScroll = this.onScroll.bind(this)
    this.addItems = this.addItems.bind(this);
  }
  componentDidMount() {
    const listBody = document.getElementById('listBody')
    listBody.addEventListener('scroll', this.onScroll, false);
  }
  addItems(){
    var {itemList, itemIndex} = this.state
    var newItemList = itemList
    newItemList.push(
      { number: itemIndex + 1},
      { number: itemIndex + 2},
      { number: itemIndex + 3},
      { number: itemIndex + 4},
      { number: itemIndex + 5},
      { number: itemIndex + 6},
      { number: itemIndex + 7},
      { number: itemIndex + 8}
    )
    
    this.setState({
      itemList: newItemList,
      itemIndex: itemIndex + 8
    })
  }
  onScroll(){
    const itemList = document.getElementById('listBody')
    if(itemList.scrollTop > (itemList.scrollHeight - 900)){
      this.addItems()
    }
  }

  render( ) {
    const {itemList} = this.state;

    return (
      <div id='listBody'>
        <div className='listDescription'>
          
          <div>Scroll down to increase list</div>
          <div>(Length: {itemList.length})</div>
        </div>
        {itemList.map( item => {
          return <Item key={item.number} number={item.number}/>
        })}
      </div>
    )}

}

export default InfiniteList;