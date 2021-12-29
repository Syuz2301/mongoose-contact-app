import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const state = {
    contacts: [],
}
const store = createStore(reducers, state, applyMiddleware(thunk));
export default store;