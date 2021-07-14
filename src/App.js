import React, { Component } from 'react';
import './App.css';
import './react/icons/Icons';

import 'typeface-montserrat';


import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {Provider} from 'react-redux';

import store from './redux/store/Store';


import {PAPER_MARGIN} from './react/constants/Constants';


const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

const styles = theme => ({
  paper: {
    paddingLeft: PAPER_MARGIN,
    paddingRight: PAPER_MARGIN
  }
});

const Website = (props) => (
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
    </MuiThemeProvider>
  </React.Fragment>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Website/>
      </Provider>

    );
  }
}


export default withStyles(styles)(App);
