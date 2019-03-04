import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        // NOTE: Math is already done, 
        // just set payload
        count: action.payload
      }
    case DECREMENT:
      return {
        ...state,
        // NOTE: Do math here, 
        // then set new state
        count: state.count - 1
      }
    default:
      return state;
  }
};
