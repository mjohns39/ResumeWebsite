import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import axios from 'axios';
import {connect} from 'react-redux';

import {fetchCoverLetterContent} from '../../actions/CoverLetterActions';

import {PAPER_MARGIN} from '../../constants/Constants';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,

  }),
});

const mapStateToProps = store => {
  return {
    coverLetterContent: store.coverLetterReducer.coverLetterContent
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCoverLetterContent: content => dispatch(fetchCoverLetterContent(content))
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
    const {fetchCoverLetterContent} = this.props;

    axios.get('https://raw.githubusercontent.com/mjohns39/ResumeWebsite/603b55f6c68e46a9ee9e777fb96ba458146bb6b3/public/cover-letter-content.txt')
    .then(response => fetchCoverLetterContent(response.data.split(/[\r\n]+/)))
    .catch(error => error);
  }

  render() {
    const {coverLetterContent, classes} = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={4}>
          {coverLetterContent?coverLetterContent.map((section, key) => CoverLetterSection(section, key)):""}
        </Paper>
      </React.Fragment>
    );

  }
}

export const CoverLetter = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CoverLetterComponent));
