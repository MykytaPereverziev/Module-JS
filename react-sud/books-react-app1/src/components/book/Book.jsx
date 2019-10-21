import React from 'react';
import Books from '../books/Books';

const Book = props => {
  const { title, isFavourite, id, imageLinks } = props.book;
  const { setBooksFromStorage,
     isBookComponent,
    addToFavouriteHandle,
  removeFromStorageForBooks } = props;


  const removeFromStorage = () => {
    let booksFromStorage = JSON.parse(localStorage.getItem('fav')) || [];
    booksFromStorage = booksFromStorage.filter(book => book.id !== id);
    localStorage.setItem('fav', JSON.stringify(booksFromStorage))
    setBooksFromStorage(booksFromStorage)
  }


  return (
    <div className="book" key={id+'sometext'}>
      <img src={imageLinks.thumbnail || ''} alt={title} />
      <h1>Title: {title}</h1>
      {!isFavourite && <button onClick={addToFavouriteHandle}>Add to favourite</button>}
      {isFavourite && !isBookComponent && <button onClick={removeFromStorage}>Remove from favourite</button>}
      {isFavourite && isBookComponent &&<button onClick={removeFromStorageForBooks}>Remove from favourite</button>}
    </div>
  );
};

export default Book;