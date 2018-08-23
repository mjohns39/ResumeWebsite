import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import {connect} from 'react-redux';

// const INTERESTS = "Mobile App Development, AI/Machine learning, weight lifting, dog training, DOTA2 Mods, Open source contribution, writing Spring Guides, making examples in Spring and React on github.  Ethical hacking.  Different types of Security Testing.";

const styles = theme => ({

});

const mapStateToProps = store => {
  return {
    resumeContent: store.resumeReducer.resumeContent
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

class InterestsComponent extends Component {
  render() {
    const {resumeContent} = this.props;
    return (
      <React.Fragment>
        <Typography variant="title" component="h3" gutterBottom>
          Interests
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {resumeContent?resumeContent.INTERESTS:""}
        </Typography>

      </React.Fragment>
    );

  }
}

// export const Interests = withStyles(styles)(InterestsComponent);
// export const Interests = InterestsComponent;
export const Interests = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InterestsComponent));
