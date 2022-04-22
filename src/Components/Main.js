import React, { useEffect } from 'react'

import * as BooksAPI from '../BooksAPI';

import CurrentlyReading from './CurrentlyReading';
import { useState} from 'react';
import Read from './Read';
import WantToRead from './WantToRead';
function Main({books}) {
  const [showSearchPage, setShowSearchpage] = useState(false);
  return (

    <div className="list-books" onChange={(e)=>e.target.value}>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            
            <div>
              <CurrentlyReading books={books} />
              <Read books={books} />
              <WantToRead books={books}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
  )
}


export default Main