
//initial state
const initialState = {
  activeTab: 0
};


export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'CHANGE_ACTIVE_TAB': {
      return {
        ...state,
        activeTab: action.payload
      }
    }
  }
  return state;
}

// export default combineReducers({resumeReducer});
