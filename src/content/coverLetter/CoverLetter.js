import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';

import axios from 'axios';
import {connect} from 'react-redux';

import {fetchCoverLetterContent} from '../../actions/CoverLetterActions';

const COVER_LETTER_MARGIN = '20%';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,

  }),
  resumePaper: {
    paddingLeft: COVER_LETTER_MARGIN,
    paddingRight: COVER_LETTER_MARGIN
  }
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

const CoverLetterSection = (section) => {
  return (
    <Typography variant="body1" component="p" gutterBottom>
      {section}
    </Typography>
  );
}

class CoverLetterComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchCoverLetterContent} = this.props;
    // fetch('https://raw.githubusercontent.com/mjohns39/ResumeWebsite/master/public/cover-letter-content.txt',
    // {method: 'GET'})
    //   .then(response => {
    //     let test = response.body;
    //     fetchCoverLetterContent(response.body);
    //   });

    axios.get('https://raw.githubusercontent.com/mjohns39/ResumeWebsite/master/public/cover-letter-content.txt')
    .then(response => {
      let test = response.data.split(/[\r\n]+/);
      fetchCoverLetterContent(response.data.split(/[\r\n]+/))
    })
    .catch(error => error);
  }

  render() {
    const {coverLetterContent, classes} = this.props;
    return (
      <React.Fragment>

        <div className={classes.resumePaper}>
            <Paper className={classes.root} elevation={4}>
              {coverLetterContent?coverLetterContent.map(section => CoverLetterSection(section)):""}
            </Paper>
        </div>

      </React.Fragment>
    );

  }
}

export const CoverLetter = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CoverLetterComponent));
