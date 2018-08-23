import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';

import {Education} from './sections/Education';
import {ProfessionalCertifications} from './sections/ProfessionalCertifications';
import {WorkExperience} from './sections/WorkExperience';
import {Skills} from './sections/Skills';
import {Interests} from './sections/Interests';

import {PAPER_MARGIN} from '../../constants/Constants';

import {getResumeContent} from '../../actions/ResumeActions';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,

  }),
  progress: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 32
  },
});

const mapStateToProps = store => {
  return {
    fetchingResumeContent: store.resumeReducer.fetchingResumeContent
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getResumeContent: () => dispatch(getResumeContent())
  }
}


class ResumeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getResumeContent} = this.props;
    getResumeContent();
  }
  render() {
    const {classes, fetchingResumeContent} = this.props;
    if(fetchingResumeContent) {
      return (
        <React.Fragment>
          <div className={classes.progress}>
            <CircularProgress size={100} />
          </div>
        </React.Fragment>
      );
    } else {
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
}

export const Resume = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ResumeComponent));
