import React from 'react'
import Book from './Book'

function WantToRead({books}) {
const result=books.filter(book=>book.shelf==='wantToRead')
    
    
  return (
    <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  
                {
                        result.map(book=>(
                            <li key={book.id}>
                             <Book book={book}
                           
                            />
                            </li>
                        ))
                    }
                  </ol>
                </div>
              </div>
  ) 
}

export default WantToRead