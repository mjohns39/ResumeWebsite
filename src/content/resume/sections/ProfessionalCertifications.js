import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import {connect} from 'react-redux';



const styles = theme => ({
  certification: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});




class ProfessionalCertificationsComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment >
        <Typography variant="title" component="h3" gutterBottom>
          Professional Certifications
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          OCA Java 8 Certified November 2016
        </Typography>
      </React.Fragment>
    );

  }
}

export const ProfessionalCertifications = withStyles(styles)(ProfessionalCertificationsComponent);
