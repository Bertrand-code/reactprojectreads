import React from 'react'
import Book from './Book'

function Read({books}) {
    const result=books.filter(book=>book.shelf==='read') 
  return (
    <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
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

export default Read