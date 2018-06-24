import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import {Education} from './sections/Education';
import {ProfessionalCertifications} from './sections/ProfessionalCertifications';
import {WorkExperience} from './sections/WorkExperience';
import {Skills} from './sections/Skills';
import {Interests} from './sections/Interests';

import {PAPER_MARGIN} from '../../constants/Constants';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,

  }),
});




class ResumeComponent extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment >
        <Paper className={classes.root} elevation={4}>
          <Education/>
        </Paper>
        <Paper className={classes.root} elevation={4}>
          <ProfessionalCertifications/>
        </Paper>
        <Paper className={classes.root} elevation={4}>
          <WorkExperience/>
        </Paper>
        <Paper className={classes.root} elevation={4}>
          <Skills/>
        </Paper>
        <Paper className={classes.root} elevation={4}>
          <Interests/>
        </Paper>

      </React.Fragment>
    );

  }
}

export const Resume = withStyles(styles)(ResumeComponent);
