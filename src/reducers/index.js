//import allows ref to exported items from other JS sheets

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //state: (state = {}) => state // standard "everything" state kery/property
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
