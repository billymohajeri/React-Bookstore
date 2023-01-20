import { useState } from 'react';
import '../styles/Home.css';
import Book from './Book';
import Form from './Form';

const booksArr = [
  { id: 1, title: 'Blindness', author: 'José Saramago' },
  { id: 2, title: 'The Stranger', author: 'Albert Camus' },
  { id: 3, title: 'The Metamorphosis', author: 'Franz Kafka' },
];

const Home = () => {
  const [state] = useState(booksArr);
  return (
    <>
      <section className="book-list">
        <Form />
        {state.map((booksArr) => (
          <Book
            key={booksArr.id}
            title={booksArr.title}
            author={booksArr.author}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
