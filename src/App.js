import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {Provider} from 'react-redux';

import store from './store/Store';

import {Header} from './header/Header';
import {Menu} from './menu/Menu';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

const styles = {


};

const Resume = () => (
  <React.Fragment>
      <Header/>
      <Menu/>
  </React.Fragment>
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Resume/>
      </Provider>

    );
  }
}


// App.propTypes = {
//   classes: PropTypes.object.isRequired,
//
// };

// export default withStyles(styles)(App);

export default withStyles(styles)(App);
