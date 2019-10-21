import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Books from './components/books/Books';
import Favourite from './components/favourite/Favourite';
import BookService from './services/bookService';

const bookService = new BookService();

const App = () => {
  const [books, setBooks] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    bookService.getBooksByName('Potter').then(res => {
      const booksInfo = res.data.items.map(item => {
        return { 
          ...item.volumeInfo,
          id: item.id, 
          isFavourite: false,
        }
      })
      setBooks(booksInfo);
    })
  }, [])

  return (
    <div className="App">
      <button
        onClick={() => setIsFavourite(!isFavourite)}
      >
        random show
        </button>
      {isFavourite ? <Favourite /> : <Books booksFromApi={books} />}
    </div>
  );
}
export default App;






