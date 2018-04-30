import React, { Component } from 'react';
import { connect } from 'react-redux';
import Listitem from './Listitem';

class MyList extends Component{
  render(){
    let theList = this.props.listitem.map(
      listitem => {
        return(
          <li>
          <Listitem listitem={listitem} />
          </li>
        )
      }
    )
    return(
      <ul>
        {theList}
      </ul>

    )
  }
}
function mapStateToProps(state){
  return{
    listitems: state.listitems
  }
}
export default connect(mapStateToProps, null)(MyList)
