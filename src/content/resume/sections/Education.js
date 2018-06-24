import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";




const styles = theme => ({
  degree: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});




class EducationComponent extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment >
        <Typography variant="title" component="h3" gutterBottom>
          Education
        </Typography>
        <Typography variant="subheading" component="p" gutterBottom>
          West Virginia University College of Engineering and Mineral Resources
        </Typography>
        <div className={classes.degree}>
          <Typography variant="body1" component="p" gutterBottom>
            Bachelor of Science Industrial Engineering and Management Systems
          </Typography>
          <Typography variant="body1" component="p" align="right" gutterBottom>
            <i>Graduated May 2013</i>
          </Typography>
        </div>
        <div className={classes.degree}>
          <Typography variant="body1" component="p" gutterBottom>
            Bachelor of Science Computer Science
          </Typography>
          <Typography variant="body1" component="p" align="right" gutterBottom>
            <i>Graduated May 2015</i>
          </Typography>
        </div>
      </React.Fragment>
    );

  }
}

export const Education = withStyles(styles)(EducationComponent);
