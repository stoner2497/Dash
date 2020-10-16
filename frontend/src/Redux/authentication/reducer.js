import {DATA_STATE} from '../DataState';
import {AUTH_ACTION_TYPES} from './action';
import isEmpty from '../utils/isEmpty';
import {REHYDRATE} from 'redux-persist';

const initalState = {
  dataState: DATA_STATE.NOT_INITIALIZED,
  authenticated: false,
};

export default function(state = initalState, action) {
  const {payload, type} = action;
  switch (type) {
    case AUTH_ACTION_TYPES.AUTH_FETCHING:
      return {
        ...state,
        dataState: DATA_STATE.FETCHING,
      };
    case AUTH_ACTION_TYPES.AUTH_FAILURE:
      return {
        ...state,
        dataState: DATA_STATE.FETCH_FAILED,
      }
    case AUTH_ACTION_TYPES.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        dataState: DATA_STATE.FETCH_SUCCESS,
        authenticated: !isEmpty(payload),
        userData: payload,
      };
    case AUTH_ACTION_TYPES.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        dataState:DATA_STATE.FETCH_SUCCESS
      }
    default:
      return state;
  }
}

export const onGettingUserData = state => state.userData;
export const getAuth = state => state.authenticated;
