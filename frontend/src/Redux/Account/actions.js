export const ACCOUNT_ACTION_TYPES = {
  FETCHING: 'ACCOUNT/FETCHING',
  FETCH_ACCOUNT_SUCCESS: 'ACCOUNT/FETCH_ACCOUNT_SUCCESS',
  FETCH_ACCOUNT_FAILURE: 'ACCOUNT/FETCH_ACCOUNT_FAILURE',
  ACCOUNT_NOT_FOUND: 'ACCOUNT/ACCOUNT_NOT_FOUND'
};

import axios from '../utils/axios'
import {Routes} from '../../Config/RequestRoutes'

export const fetchingAccount = () => {
    return {
        type:ACCOUNT_ACTION_TYPES.FETCHING
    }
}

export const FetchingAccountSuccess = (data) => {
    return {
        type:ACCOUNT_ACTION_TYPES.FETCH_ACCOUNT_SUCCESS,
        payload:data
    }
} 

export const accountNotFound = () => {
    return {
        type:ACCOUNT_ACTION_TYPES.ACCOUNT_NOT_FOUND
    }
}

export const getAccount = () => {
    return dispatch => {
        dispatch(fetchingAccount())
        let url = `${Routes.Host}/userAccount`
        axios.get(url)
        .then(res => {
            if(res.status === 404) {
                dispatch(accountNotFound())
            }else {
                dispatch(FetchingAccountSuccess(res.data))
            }
        }).catch(err => {
            console.log(err)
        })  
    }
}