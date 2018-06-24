import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";


import {changeActiveTab} from '../actions/ResumeActions';

import {Resume} from '../content/resume/Resume';
import {CoverLetter} from '../content/coverLetter/CoverLetter';
import {About} from '../content/about/About';

const styles = {
    root: {
      maxWidth: '100%'
    }
};

const mapStateToProps = store => {
  return {
    activeTab: store.resumeReducer.activeTab
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActiveTab: index => dispatch(changeActiveTab(index))
  }
}

class MenuComponent extends Component {
  render() {
    const {activeTab, changeActiveTab, classes} = this.props;
    return (
      <React.Fragment>
        <div>
          <AppBar position="static">
            <Tabs fullWidth value={activeTab} onChange={(event,value) => changeActiveTab(value)}>
              <Tab classes={classes} label="Resume"/>
              <Tab classes={classes} label="Cover Letter"/>
            </Tabs>
          </AppBar>

        </div>

        {activeTab === 0?<Resume/>:""}
        {activeTab === 1?<CoverLetter/>:""}
      </React.Fragment>
    );

  }
}

// export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
// export const Menu = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuComponent));
export const Menu = withStyles(styles)(MenuContainer);
