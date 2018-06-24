import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class ProfessionalCertificationsComponent extends Component {
  render() {
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

// export const ProfessionalCertifications = withStyles(styles)(ProfessionalCertificationsComponent);
export const ProfessionalCertifications = ProfessionalCertificationsComponent;
