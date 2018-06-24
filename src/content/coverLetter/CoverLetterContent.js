import React, { Component } from 'react';


import {TabContainer} from '../ContentUtil';

import {CoverLetter} from './CoverLetter';


class CoverLetterContentComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TabContainer>
          <CoverLetter/>
        </TabContainer>
      </React.Fragment>
    );

  }
}

// export const CoverLetterContent = connect(mapStateToProps, mapDispatchToProps)(CoverLetterContentComponent);
export const CoverLetterContent = CoverLetterContentComponent;
