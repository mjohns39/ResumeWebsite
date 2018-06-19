import React from 'react';
import {combineReducers} from 'redux';

import resumeReducer from './ResumeReducer';
import coverLetterReducer from './CoverLetterReducer';


export default combineReducers({
  resumeReducer,
  coverLetterReducer
});
