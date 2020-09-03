import * as redux from 'redux';
import thunk from 'redux-thunk';
import {rentalsReducer, selectedRentalReducer} from './rentals-reducer';
import { createStore, applyMiddleware, compose } from 'redux';

export const init = () =>{
    const reducer = redux.combineReducers({
        rentals: rentalsReducer,
        rental: selectedRentalReducer
    })
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}