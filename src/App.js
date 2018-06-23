import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';

import {Provider} from 'react-redux';

import store from './store/Store';

import {Header} from './header/Header';
import {Menu} from './menu/Menu';

import {PAPER_MARGIN} from './constants/Constants';


const styles = theme => ({
  paper: {
    paddingLeft: PAPER_MARGIN,
    paddingRight: PAPER_MARGIN
  }
});

const Resume = (props) => (
  <React.Fragment>
      <Header/>
      <Menu/>
  </React.Fragment>
)

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Resume/>
      </Provider>

    );
  }
}


export default withStyles(styles)(App);
