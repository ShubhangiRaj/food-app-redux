import {createStore} from 'redux';
import reducers from '../reducers/reducers';

let initialState = {
    items: [],
    cartItems: [],
    compareItems: []
}

let store = createStore(reducers, initialState);

export default store;