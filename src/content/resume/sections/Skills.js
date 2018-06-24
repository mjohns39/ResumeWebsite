import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const ABOVE_PROFICIENT_SKILLS = "Java 8, Spring Framework (Web, Data, Security, Boot, Testing and Cloud), React, React Native, Redux, Redux-Thunk";
const PROFICIENT_SKILLS = "Oracle PL/SQL, Jasper, Angular 5,  Jwt, PrimeNG, PrimeReact, Native-Base, NPM, OAuth2.0, MaterialUI, Hybernate, Git, SVN, Gradle, Cucumber, JMeter, Redux-Saga, TDD, BDD";
const FAMILIAR_SKILLS = "AuthO, AWS services, Maven, HTML/CSS/JavaScript, Batch/Bash, Oracle Weblogic Server 11g/12c, AngularJS, OWASP, Groovy, Docker, Kubernetes, Jconsole, Virtual VM";
const EXPOSURE_SKILLS = "Python, C, Pig/Hive, D3.js, Bootstrap, Hadoop/HBase, MongoDB, PCF, GCP";






class SkillsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="title" component="h3" gutterBottom>
          Skills
        </Typography>

        <Typography variant="subheading" component="p" gutterBottom>
          <i>Above Proficient</i>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {ABOVE_PROFICIENT_SKILLS}
        </Typography>
        <Divider/>

        <Typography variant="subheading" component="p" gutterBottom>
          <i>Proficient</i>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {PROFICIENT_SKILLS}
        </Typography>
        <Divider/>

        <Typography variant="subheading" component="p" gutterBottom>
          <i>Familiar</i>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {FAMILIAR_SKILLS}
        </Typography>
        <Divider/>

        <Typography variant="subheading" component="p" gutterBottom>
          <i>Exposure</i>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {EXPOSURE_SKILLS}
        </Typography>
      </React.Fragment>
    );

  }
}

// export const Skills = withStyles(styles)(SkillsComponent);
export const Skills = SkillsComponent;
