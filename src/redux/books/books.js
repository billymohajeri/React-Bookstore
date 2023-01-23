const ADD = 'books/ADD_BOOK';
const REMOVE = 'books/REMOVE_BOOK';

const INITIAL_STATE = [];

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE: {
      const filteredBooks = state.filter((book) => book.id !== action.bookId);
      return filteredBooks;
    }
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});

export default bookReducer;
