import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './src/Redux/rootReducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";


const enhancers = [];
const middleware = [thunk];
// we are using redux-persist to persist the state. we can whiteList and blackList specific reducers to persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// let composeEnhancers = compose(applyMiddleware(...middleware));


// export const store = createStore(persistedReducer, composer(applyMiddleware(thunk)));
// export const persistor = persistStore(store);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);


export default store;
