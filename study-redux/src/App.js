import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListitems } from './actions/list';
import MyList from './components/MyList';


class App extends Component {
  componentDidMount(){
    this.props.getListitems()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{fontSize: '50px'}}>Welcome to the Redux Study Guide</h1>
        </header>
        <p><strong>How this guide works:</strong> cd into study-redux once you download this guide. Start up the webpage and compare it to the code used to create it as prompted.</p>
        <MyList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getListitems: bindActionCreators(getListitems, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
