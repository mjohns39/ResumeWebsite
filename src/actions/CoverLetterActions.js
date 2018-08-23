import axios from 'axios';

import {API_URL} from '../constants/Constants';


export function getCoverLetterContent() {
  const apiUrl = API_URL;

  return function(dispatch, getState) {
    if(!getState().coverLetterReducer.coverLetterContent) {
      dispatch(getCoverLetterContentAttempt());

      axios.get(apiUrl + "/content/coverLetter")
      .then(response => {
        dispatch(getCoverLetterContentSuccess(response.data.split(/[\r\n]+/)))
      })
      .catch(error => {
        dispatch(getCoverLetterContentFailure(error))
      });

    }
  }

}


function getCoverLetterContentAttempt() {
  return {
    type: "GET_COVER_LETTER_CONTENT_ATTEMPT"
  }
}

function getCoverLetterContentSuccess(data) {
  return {
    type: "GET_COVER_LETTER_CONTENT_SUCCESS",
    payload: data
  }
}

function getCoverLetterContentFailure(error) {
  return {
    type: "GET_COVER_LETTER_CONTENT_FAILURE",
    payload: error
  }
}
