import React, { Component } from 'react';


import {connect} from 'react-redux';
import {TabContainer} from './ContentUtil';

const mapStateToProps = store => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}





class CoverLetterContentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {activeTab, changeActiveTab} = this.props;
    return (
      <React.Fragment>
        <TabContainer>About Me</TabContainer>
      </React.Fragment>
    );

  }
}

export const CoverLetterContent = connect(mapStateToProps, mapDispatchToProps)(CoverLetterContentComponent);
