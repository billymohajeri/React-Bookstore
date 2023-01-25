const ADD = 'books/ADD_BOOK';
const REMOVE = 'books/REMOVE_BOOK';
const LOAD = 'books/LOAD_BOOKS';

const INITIAL_STATE = [];

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD: {
      const bookArr = [];
      Object.entries(action.books).forEach(([key, value]) => {
        bookArr.push({
          item_id: key,
          title: value[0].title,
          category: value[0].category,
          author: value[0].author,
        });
      });
      return bookArr;
    }

    case ADD:
      return [...state, action.book];

    case REMOVE: {
      const filteredBooks = state.filter((book) => book.item_id !== action.bookId);
      return filteredBooks;
    }
    default:
      return state;
  }
};

export const loadBooks = (books) => ({
  type: LOAD,
  books,
});

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});

export default bookReducer;
