import React, { useRef } from 'react'
import { useState} from 'react';
import * as BooksAPI from "../BooksAPI";
import Book from './Book';
import {Link} from "react-router-dom"

function Search() {
  // to keep track of the search query
  const query = useRef();
  const [booksSearch, setBooksSearch] = useState(null);
  function searchBook() {
    BooksAPI.search(query.current.value).then((res) => {
      if (res.error) {
        setBooksSearch(null);
        return;
      }
      setBooksSearch(res);
    });
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
                <Book book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search