import '../styles/Book.css';

const Book = (book) => {
  const { title, author } = book;

  return (
    <>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
    </>
  );
};
export default Book;
