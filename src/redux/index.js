import * as redux from 'redux';
import {rentalReducer} from './rental-reducer';
export const init = () =>{
    const reducer = redux.combineReducers({
        rentals:rentalsReducer
    })
    const store = redux.createStore();
    return store;
}