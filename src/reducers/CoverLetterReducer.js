const initialState = {
  coverLetterContent: ""
};


export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_COVER_LETTER_CONTENT': {
      return {
        ...state,
        coverLetterContent: action.payload
      }
    }
  }
  return state;
}
