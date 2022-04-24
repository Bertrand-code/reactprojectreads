import Book from "./Book";
import { Link } from "react-router-dom";
import {useEffect, useRef} from "react";
import * as BooksAPI from "../BooksAPI";

function Main({ books, setBooks, moveShelves}) {

  const result=books.filter(book=>book.shelf==='currentlyReading') 
  const result1=books.filter(book=>book.shelf==='read') 
  const result2=books.filter(book=>book.shelf==='wantToRead')
  const set=useRef()
  
  function data(){
    BooksAPI.getAll().then((data)=>{
      setBooks(data)
      return () => {
        setBooks(books)
      
      }
       
       })
    
  }
  set.current=data;
  useEffect(() => {
  set.current()
  
    
  }, [])
  
  return (
    <div className="list-books" onChange={(e) => e.target.value}>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        
              <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {
                        result?.map(book=>(
                            <li key={book.id}>
                             <Book book={book}
                             setBooks={setBooks}
                             moveShelves={moveShelves}
                             />
                            </li>
                        ))
                    }
        
      </ol>
    </div>
  </div>
  <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                        result1.map(book=>(
                            <li key={book.id}>
                           <Book book={book}
                          setBooks={setBooks}
                         moveShelves={moveShelves}
                           />
                            </li>
                        ))
                    }
                  </ol>
                </div>
              </div>
        </div>
        <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  
                {
                        result2.map(book=>(
                            <li key={book.id}>
                             <Book book={book}
                           setBooks={setBooks}
                           moveShelves={moveShelves}
                            />
                            </li>
                        ))
                    }
                  </ol>
                </div>
              </div>
      </div>
      
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
    
  );
}

export default Main;