import React from 'react'
import { useState, useEffect } from 'react';
import * as BooksAPI from "../BooksAPI";
import Book from './Book';
function Search() {
    const [showSearchPage, setShowSearchpage] = useState(false);
    const [query, setQuery]=useState('')
    const [booksSearch, setBooksSearch]=useState([])
   

    useEffect(() => {
     if (query){
      BooksAPI.search(query).then((data)=>{
        if(data){
          setBooksSearch(booksSearch)
          console.log(booksSearch)
        }
        
      })
     } else{
       setBooksSearch([])
     }
     return ()=>{
       
       setBooksSearch([])
     }
    
    }, [query.length])
    
    
  return (
    <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)} 
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              />{console.log(query)}
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            {
                       booksSearch.map(bookSearch=>(
                      
                            <li key={bookSearch.id}>
                               
                             <Book book={bookSearch}
                             
                             />
                

                            </li>
                        ))
                       
                    }
            </ol>
          </div>
        </div>
 
  )

}

export default Search