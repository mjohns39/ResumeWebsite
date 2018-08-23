import axios from 'axios';

import {API_URL} from '../constants/Constants';




export function changeActiveTab(index) {
  return {
    type: "CHANGE_ACTIVE_TAB",
    payload: index
  }
}

export function getResumeContent() {
  const apiUrl = API_URL;

  return function(dispatch, getState) {
    if(!getState().resumeReducer.resumeContent) {
      dispatch(getResumeContentAttempt());

      axios.get(apiUrl + "/content/resume")
      .then(response => {
        dispatch(getResumeContentSuccess(response.data))
      })
      .catch(error => {
        dispatch(getResumeContentFailure(error))
      });

    } 
  }

}


function getResumeContentAttempt() {
  return {
    type: "GET_RESUME_CONTENT_ATTEMPT"
  }
}

function getResumeContentSuccess(data) {
  return {
    type: "GET_RESUME_CONTENT_SUCCESS",
    payload: data
  }
}

function getResumeContentFailure(error) {
  return {
    type: "GET_RESUME_CONTENT_FAILURE",
    payload: error
  }
}
