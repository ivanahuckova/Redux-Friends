import { combineReducers } from 'redux';
import * as reducers from './individualReducers';
const rootReducer = combineReducers({ user: reducers.user, token: reducers.token, loading: reducers.loading, friends: reducers.friends });

export default rootReducer;
