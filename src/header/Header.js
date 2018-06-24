import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";


const styles = {
  appBar: {
    alignItems: 'center'
  },
};

class HeaderComponent extends Component {
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
