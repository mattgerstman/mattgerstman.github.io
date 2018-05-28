import {ActionTypes} from './actions';

const defaultState = [];

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.RECORDS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
