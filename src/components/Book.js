import { MdDeleteOutline } from 'react-icons/md';
import '../styles/Book.css';

const Book = (book) => {
  const { title, author } = book;

  return (
    <article className="one-book">
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <MdDeleteOutline className="book-delete-btn" />
    </article>
  );
};
export default Book;
