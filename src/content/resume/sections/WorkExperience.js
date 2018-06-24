import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';





const WE1_DR = "Work on JIRA’s from a backlog.  Develop new apps with Java 8, Spring Boot, Angular 5, and React.";
const WE1_SA1 = "Found CSRF vulnerability the Cloud Architecture at this organization.  Fixed CSRF vulnerability by implementing stateless/RESTful Auth using Kerberos Authentication and OAuth2 Authorization with JWT access tokens and Spring Security, behind a Zuul Proxy Gateway created with Spring Cloud and with a Spring Cloud Config Server.";
const WE1_SA2 = "Recreated complete legacy app, written in Java 7/AngularJS from ground up using Java 8, Spring Boot, Angular 5 and PrimeNG.";
// const WE1_SA3 = "Taught entire department how to perform advance techniques with Spring Framework, Angular TS and React.";

const WE2_DR = "Develop Microservices using Java 8, Spring Boot and Pivotal Cloud, DIT test code, review peer code, Daily Standup, groom User Stories for backlog, identify dependencies, pull user stories from backlog and write tasks for user stories."
const WE2_SA1 = "Implemented code for Fraud APIs for QuickLock service.  Trained team members on Spring Boot Microservice development and integration.  Integrated QuickLock service with UI calls.";

const WE3_DR = "Analyze existing report code in WebFocus, write PL/SQL procedure, write Jasper report, inject jasper report into spring bean, write Java controller to call report, add report resource to XHTML file, DIT test report, coordinate with business team for requirements.";
const WE3_SA1 = "Identified/Corrected 10 reports with production defects, two of which could have resulted in legal action.  ";
const WE3_SA2 = WE3_SA1 + "Single handily converted 26 of the 40 reports thus delivering project four months ahead of schedule.";

// const bulletPoint = '&#x25CF;';

const styles = theme => ({
  experienceSummary: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start'
  },
  experienceDetail: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-left',
  },
  divider: {
    paddingLeft: 16
  }

});

const WE1Experience = (classes) => {
  return (
    <div className={classes.root}>
      <div className={classes.experienceSummary}>
        <Typography variant="subheading" component="p" gutterBottom>
          Financial Institution Company Wealth and Investment (Contract)
        </Typography>
        <Typography variant="subheading" component="p" align="right" gutterBottom>
          <i>April 2017 - present</i>
        </Typography>
      </div>
      <Typography variant="body1" component="p" gutterBottom>
        General Rest API, Angular TS and React Development
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <i>Daily Responsibilities:&nbsp;&nbsp;</i> {WE1_DR}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <i>Significant Accomplishments:&nbsp;&nbsp;</i>
      </Typography>
      <div className={classes.experienceDetail}>
        <Typography variant="body1" component="p" gutterBottom>
          &#x25CF;
        </Typography>
        <div className={classes.divider}></div>
        <Typography variant="body1" component="p" gutterBottom>
          {WE1_SA1}
        </Typography>
      </div>
      <div className={classes.experienceDetail}>
        <Typography variant="body1" align="left" gutterBottom>
          &#x25CF;
        </Typography>
        <div className={classes.divider}></div>
        <Typography variant="body1" component="p" gutterBottom>
          {WE1_SA2}
        </Typography>
      </div>
    </div>
  );
}

const WE2Experience = (classes) => {
  return (
    <div>
      <div className={classes.experienceSummary}>
        <Typography variant="subheading" component="p" gutterBottom>
          Financial Institution Company Consumer Bank (Consultant)
        </Typography>
        <Typography variant="subheading" component="p" align="right" gutterBottom>
          <i>December 2016 - April 2017</i>
        </Typography>
      </div>
      <Typography variant="body1" component="p" gutterBottom>
        Rest API Development using Spring Boot and Java 8
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <i>Daily Responsibilities:&nbsp;&nbsp;</i> {WE2_DR}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <i>Significant Accomplishments:&nbsp;&nbsp;</i>
      </Typography>
      <div className={classes.experienceDetail}>
        <Typography variant="body1" component="p" gutterBottom>
          &#x25CF;
        </Typography>
        <div className={classes.divider}></div>
        <Typography variant="body1" component="p" gutterBottom>
          {WE2_SA1}
        </Typography>
      </div>
    </div>
  );
}

const WE3Experience = (classes) => {
  return (
    <div>
      <div className={classes.experienceSummary}>
        <Typography variant="subheading" component="p" gutterBottom>
          Financial Institution Company Institutional Client Group (Consultant)
        </Typography>
        <Typography variant="subheading" component="p" align="right" gutterBottom>
          <i>June 2015 - December 2016</i>
        </Typography>
      </div>
      <Typography variant="body1" component="p" gutterBottom>
        Java 7 and Oracle PL/SQL development
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <i>Daily Responsibilities:&nbsp;&nbsp;</i> {WE3_DR}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <i>Significant Accomplishments:&nbsp;&nbsp;</i>
      </Typography>
      <div className={classes.experienceDetail}>
        <Typography variant="body1" component="p" gutterBottom>
          &#x25CF;
        </Typography>
        <div className={classes.divider}></div>
        <Typography variant="body1" component="p" gutterBottom>
          {WE3_SA2}
        </Typography>
      </div>
    </div>
  );
}


class WorkExperienceComponent extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment >
        <Typography variant="title" component="h3" gutterBottom>
          Work Experience
        </Typography>
        {WE1Experience(classes)}
        <Divider gutterBottom/>
        {WE2Experience(classes)}
        <Divider gutterBottom/>
        {WE3Experience(classes)}
      </React.Fragment>
    );

  }
}

export const WorkExperience = withStyles(styles)(WorkExperienceComponent);
