import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getAccount} from '../../Redux/Account/actions';
import {getAccountState} from '../../Redux/rootReducers';
import {DATA_STATE} from '../../Redux/DataState';
import NewUser from './NewUser';
import NewsFeed from './NewsFeed';
import Home from './Home'
export default function index() {
  const dispatch = useDispatch();

  const accountState = useSelector(state => getAccountState(state));
  // if (accountState.dataState === DATA_STATE.FETCHING) {
  //   return <Loader />;
  // } else if (accountState.dataState === DATA_STATE.NOT_FOUND) {
  //   return <NewUser />;
  // } else {
  //   return <NewsFeed />;
  // }
  return <Home />
}
