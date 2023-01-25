import '../styles/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { removeBookAsync } from '../redux/books/api';

const Home = () => {
  const dispatch = useDispatch();
  const bookNames = useSelector((state) => state.books);
  return (
    <>
      <section className="book-list">
        {bookNames.map((book) => (
          <article className="one-book" key={book.item_id}>
            <div className="book-info=-container">
              <Book
                title={book.title}
                author={book.author}
                category={book.category}
              />
              <ul className="action-buttons">
                <li>
                  <button type="button" className="action-comments">
                    Comments
                  </button>
                </li>
                <li className="v-divider">|</li>
                <li>
                  <button
                    type="button"
                    className="action-remove"
                    onClick={() => dispatch(removeBookAsync(book.item_id))}
                  >
                    Remove
                  </button>
                </li>
                <li className="v-divider">|</li>
                <li className="action-edit">
                  <button type="button" className="action-edit">
                    Edit
                  </button>
                </li>
              </ul>
            </div>
            <div className="progress-container">
              <div className="circular-progress" />
              <div className="progress-stat">
                <p className="percent-complete">64%</p>
                <p className="completed">Completed</p>
              </div>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
                <button className="primary-button" type="button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </article>
        ))}
        <div className="h-divider" />
        <Form />
      </section>
    </>
  );
};

export default Home;
