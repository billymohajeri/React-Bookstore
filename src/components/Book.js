import '../styles/Book.css';

const Book = (book) => {
  const { title, author, category } = book;

  return (
    <div className="book-info">
      <p className="book-category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
    </div>
  );
};
export default Book;
