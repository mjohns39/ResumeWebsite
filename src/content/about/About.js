import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import {connect} from 'react-redux';

import {PAPER_MARGIN} from '../../constants/Constants';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,

  }),
  portfolioPaper: {
    paddingLeft: PAPER_MARGIN,
    paddingRight: PAPER_MARGIN
  }
});




class AboutComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment >

        <div className={classes.resumePaper}>
          <TabContainer>
            <Paper className={classes.root} elevation={4}>
          </TabContainer>

        </div>
      </React.Fragment>
    );

  }
}

export const About = withStyles(styles)(AboutComponent);
