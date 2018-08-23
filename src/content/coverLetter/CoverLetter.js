import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';
import {connect} from 'react-redux';

import {getCoverLetterContent} from '../../actions/CoverLetterActions';

import {PAPER_MARGIN} from '../../constants/Constants';

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
  }
});

const mapStateToProps = store => {
  return {
    coverLetterContent: store.coverLetterReducer.coverLetterContent,
    fetchingCoverLetterContent: store.coverLetterReducer.fetchingCoverLetterContent,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCoverLetterContent: () => dispatch(getCoverLetterContent())
  }
}

const CoverLetterSection = (section, key) => {
  return (
    <Typography key={key} variant="body1" component="p" gutterBottom>
      {section}
    </Typography>
  );
}

class CoverLetterComponent extends Component {

  componentDidMount() {
    const {getCoverLetterContent} = this.props;
    getCoverLetterContent();

    // axios.get('https://raw.githubusercontent.com/mjohns39/ResumeWebsite/603b55f6c68e46a9ee9e777fb96ba458146bb6b3/public/cover-letter-content.txt')
    // .then(response => fetchCoverLetterContent(response.data.split(/[\r\n]+/)))
    // .catch(error => error);
  }

  render() {
    const {fetchingCoverLetterContent, coverLetterContent, classes} = this.props;

    if(fetchingCoverLetterContent) {
      return (
        <React.Fragment>
          <div className={classes.progress}>
            <CircularProgress size={100} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Paper className={classes.root} elevation={4}>
            {coverLetterContent?coverLetterContent.map((section, key) => CoverLetterSection(section, key)):""}
          </Paper>
        </React.Fragment>
      );
    }

  }
}

export const CoverLetter = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CoverLetterComponent));
