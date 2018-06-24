import React, { Component } from 'react';
import './App.css';
import './icons/Icons';

// import 'typeface-roboto';
import 'typeface-montserrat';
// import 'typeface-montserrat-alternates';
// import 'typeface-montserrat-subrayada';
// import 'typeface-cormorant';


// import { createMuiTheme } from 'material-ui/styles';




import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {Provider} from 'react-redux';

import store from './store/Store';

import {Header} from './header/Header';
import {Menu} from './menu/Menu';

import {PAPER_MARGIN} from './constants/Constants';


const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
    // fontFamily: "Cormorant",
    // fontFamily: "Montserrat-Alternates",
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
      <Header/>
      <Menu/>
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
