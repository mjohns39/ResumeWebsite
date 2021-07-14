import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 16,
    paddingBottom: 16,
  },
  flex: {
    flex: 1,
  },
};

class HeaderComponent extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <div className={classes.flex}>
              <Typography variant="display1" color="inherit" className={classes.flex}>
                Michael Johnson
              </Typography>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Software Engineer
              </Typography>
            </div>
            <a href="https://www.linkedin.com/in/mljohns89/">
              <IconButton color="inherit">
                <FontAwesomeIcon icon={['fab', 'linkedin']} color='white'/>
              </IconButton>
            </a>
            <a href="https://github.com/mjohns39">
              <IconButton color="inherit">
                <FontAwesomeIcon icon={['fab', 'github']} color='white'/>
              </IconButton>
            </a>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );

  }
}

export const Header = withStyles(styles)(HeaderComponent);
