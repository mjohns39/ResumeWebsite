
//initial state
const initialState = {
  activeTab: 0,
  fetchingResumeContent: false,
  resumeContent: null,
  error: null
};


export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'CHANGE_ACTIVE_TAB': {
      return {
        ...state,
        activeTab: action.payload
      }
    }
    case 'GET_RESUME_CONTENT_ATTEMPT': {
      return {
        ...state,
        fetchingResumeContent: true
      }
    }
    case 'GET_RESUME_CONTENT_SUCCESS': {
      return {
        ...state,
        fetchingResumeContent: false,
        resumeContent: action.payload
      }
    }
    case 'GET_RESUME_CONTENT_FAILURE': {
      return {
        ...state,
        fetchingResumeContent: false,
        error: action.payload
      }
    }
  }
  return state;
}

// export default combineReducers({resumeReducer});
