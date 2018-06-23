import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import {connect} from 'react-redux';
import {TabContainer} from '../ContentUtil';
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
    marginTop: theme.spacing.unit * 3,

  }),
  resumePaper: {
    paddingLeft: PAPER_MARGIN,
    paddingRight: PAPER_MARGIN
  }
});




class ResumeContentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {activeTab, changeActiveTab, classes} = this.props;
    return (
      <React.Fragment >
        <div className={classes.resumePaper}>
          <TabContainer>
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
          </TabContainer>

        </div>
      </React.Fragment>
    );

  }
}

export const ResumeContent = withStyles(styles)(ResumeContentComponent);
