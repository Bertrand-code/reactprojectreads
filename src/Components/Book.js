import React from 'react'
import * as BooksAPI from "../BooksAPI";


function Book({ book, setBooks }) {
  const backgroundImage =
    book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "noImage";
  const title = book.title ? book.title : 'No title available';
  const authors = book.authors ? book.authors.join(', ') : 'Unknown Author'

  async function changeShelf(e) {
    await BooksAPI.update(book, e.target.value)
    await BooksAPI.getAll().then((book) => {
      setBooks(book)
    })
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${backgroundImage}")`

          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={changeShelf}
            value={book.shelf || "none"}
          >


            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title} </div>
      <div className="book-authors">{authors}</div>
    </div>
  )
}

export default Book