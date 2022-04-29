import React, { useRef } from 'react'
import { useState } from 'react';
import * as BooksAPI from "../BooksAPI";
import Book from './Book';
import { Link } from "react-router-dom"

function Search({ setBooks, books }) {
  // to keep track of the search query

  const query = useRef();
  const [booksSearch, setBooksSearch] = useState(null);
  function searchBook() {
    if(query){
      BooksAPI.search(query.current.value).then((res) => {
        if ("error" in res) {
          setBooksSearch(null);
          return;
        }
        res?.map((book) => {
          console.log(book)
          let search = books.find((b) => b.id === book.id);
          search ? (book.shelf = search.shelf) : (book.shelf = "none");
  
          return book;
        });
  
        setBooksSearch(res);
      });
    }else{
      searchBook([])
      return booksSearch.includes(query);
    }

  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            ref={query}
            onChange={searchBook}
          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksSearch &&
            booksSearch?.map((book) => (
              <li key={book.id}>
                <Book book={book} setBooks={setBooks} />
              </li>
              
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search