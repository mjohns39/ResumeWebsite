import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {connect} from 'react-redux';

import {PAPER_MARGIN} from '../../constants/Constants';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});



const LinkedIn = () => {
  return (
    <Typography variant="title" component="h3" gutterBottom>
      <FontAwesomeIcon icon={['fab', 'linkedin']} color="blue"/>:
    </Typography>
  );
};




class AboutComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={4}>
          <LinkedIn/>
        </Paper>
      </React.Fragment>
    );

  }
}

export const About = withStyles(styles)(AboutComponent);
