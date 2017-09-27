import { combineReducers } from 'redux';
import BookReducer from './reducer_book';

const rootReducer = combineReducers({
    //40.1 books is piece of state name is reducer itself 
    // books is key 
    // BookReducer is value
  books:BookReducer
});

export default rootReducer;
