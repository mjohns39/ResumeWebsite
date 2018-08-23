const initialState = {
  coverLetterContent: null,
  fetchingCoverLetterContent: false,
  error: null
};


export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'GET_COVER_LETTER_CONTENT_ATTEMPT': {
      return {
        ...state,
        fetchingCoverLetterContent: true
      }
    }
    case 'GET_COVER_LETTER_CONTENT_SUCCESS': {
      return {
        ...state,
        fetchingCoverLetterContent: false,
        coverLetterContent: action.payload
      }
    }
    case 'GET_COVER_LETTER_CONTENT_FAILURE': {
      return {
        ...state,
        fetchingCoverLetterContent: false,
        error: action.payload
      }
    }
  }
  return state;
}
