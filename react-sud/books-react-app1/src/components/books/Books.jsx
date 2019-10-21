import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Books = props => {
  const { booksFromApi } = props;
  const [booksFromStorage, setBooksFromStorage] = useState([]);


  const filterBooks = () => {
    const books = JSON.parse(localStorage.getItem('fav')) || [];
    let newBookArr = [];
    newBookArr = booksFromApi.filter(item => {
      return !books.find(el.id == item.id);
    })
    newBookArr.push(...books);
    console.log(newBookArr);
    setBooksFromStorage(newBookArr);
  }
  useEffect(() => {
    filterBooks()
    }, [booksFromApi]);

    const addToFavoriteHandle= () => {
        const booksFromStorage = JSON.parse(localStorage.getItem('fav')) || [];
        booksFromStorage.push({...props.book, isFavourite: true});
        localStorage.setItem('fav', JSON.stringify(booksFromStorage))
        setBooksFromStorage(booksFromStorage)
      }
    

  return (
    <div className="container">
      <h2>Books</h2>
      {booksFromStorage.length &&
        [...booksFromStorage].map(book => {
          return <Book book={book} 
          setBooksFromStorage={setBooksFromStorage} 
          key={`${book.id}-${book.isFavourite ? book.title: 'book'}`}
          isBookComponent
          />
        })
      }
    </div>
  );
};

export default Books;