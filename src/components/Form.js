import '../styles/Form.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/api';

const Form = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!(newBook.title.trim() && newBook.author.trim())) {
      return;
    }

    dispatch(
      addBookAsync({
        item_id: uuidv4(),
        title: newBook.title,
        author: newBook.author,
        category: '',
      }),
    );
    // dispatch(addBookAsync(book));
    setNewBook({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <section className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          className="title-input"
          required
          value={newBook.title}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          className="author-input"
          required
          value={newBook.author}
          onChange={handleInput}
        />
        <button type="submit" className="add-btn" onClick={handleClick}>
          Add Book
        </button>
      </form>
    </section>
  );
};
export default Form;
