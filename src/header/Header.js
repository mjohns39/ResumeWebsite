import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";


const styles = {
  appBar: {
    alignItems: 'center'
  },
};

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Michael Johnson's Resume Website
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );

  }
}

export const Header = withStyles(styles)(HeaderComponent);
