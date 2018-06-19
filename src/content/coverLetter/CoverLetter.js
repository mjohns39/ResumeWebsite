import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';

import {connect} from 'react-redux';

import {fetchCoverLetterContent} from '../../actions/CoverLetterActions';

let COVER_LETTER_TEXT = "";

const styles = theme => ({

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


class CoverLetterComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchCoverLetterContent} = this.props;
    fetch('cover-letter-content.txt')
      .then(response => {
        let test = 0;
        response.text();
      })
      .then(responseText => fetchCoverLetterContent(responseText));
  }

  render() {
    const {coverLetterContent} = this.props;
    return (
      <React.Fragment>
        <Typography variant="body1" component="p">
        {coverLetterContent}
        </Typography>

      </React.Fragment>
    );

  }
}

export const CoverLetter = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CoverLetterComponent));
