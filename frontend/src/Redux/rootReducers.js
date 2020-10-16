import { combineReducers } from "redux";
import authenticationReducer , * as fromAuth from "./authentication/reducer";
import accountReducer from './Account/reducer'


export default combineReducers({
  authentication: authenticationReducer,
  account:accountReducer
});


export const getAccountState = state => state.account

export const getAuthState = state => state.authentication

export const onGettingUserData = state => fromAuth.onGettingUserData(getAuthState(state))

export const getAuth = state => fromAuth.getAuth(getAuthState(state))




