import { combineReducers } from 'redux';
import BookReducer from './reducer_book';

const rootReducer = combineReducers({
    //40.1 state = book, and 
  books:BookReducer
});

export default rootReducer;
