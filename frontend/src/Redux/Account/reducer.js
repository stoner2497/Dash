import {ACCOUNT_ACTION_TYPES} from './actions';
import {DATA_STATE} from '../DataState';

const initialState = {
  dataState: DATA_STATE.NOT_INITIALIZED,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_ACTION_TYPES.FETCHING:
      return {
        ...state,
        dataState: DATA_STATE.FETCHING,
      };
    case ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        dataState: DATA_STATE.FETCH_SUCCESS,
        Account: action.payload,
      };
    case ACCOUNT_ACTION_TYPES.ACCOUNT_NOT_FOUND:
      return {
        ...state,
        dataState: DATA_STATE.NOT_FOUND,
      };
    default:
      return state;
  }
}
