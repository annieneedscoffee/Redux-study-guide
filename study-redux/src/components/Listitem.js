import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getListitems from '../actions/list';

const Listitem = (props) => {
  let {id, fname, lname} = props.listitem
  return(
    <div>
      <h3>{fname + " " + lname}</h3>
    </div>
  );
};

export default Listitem;
