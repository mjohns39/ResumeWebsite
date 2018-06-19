import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';

import {connect} from 'react-redux';

const INTERESTS = "Mobile App Development, AI/Machine learning, weight lifting, dog training, DOTA2 Mods, Open source contribution, writing Spring Guides, making examples in Spring and React on github.  Ethical hacking.  Different types of Security Testing.";

const styles = theme => ({

});




class InterestsComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Typography variant="title" component="h3" gutterBottom>
          Interests
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {INTERESTS}
        </Typography>

      </React.Fragment>
    );

  }
}

export const Interests = withStyles(styles)(InterestsComponent);
