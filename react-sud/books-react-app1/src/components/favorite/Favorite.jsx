import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Favourite = props => {
  const [booksFromStorage, setBooksFromStorage] = useState([]);

  useEffect(() => {
    const books= JSON.parse(localStorage.getItem('fav'));
    setBooksFromStorage(books || []);
  }, [])

  return (
    <div className="container">
      <h2>Favourites</h2>
      {booksFromStorage.length &&
        booksFromStorage.map(book => {
          return <Book book={book} key={book.id+'fav'} setBooksFromStorage={setBooksFromStorage} key={`${book.id}-${book.isFavourite ? book.title: 'book'}`}/>
        })
      }
    </div>
  );
};

export default Favourite;