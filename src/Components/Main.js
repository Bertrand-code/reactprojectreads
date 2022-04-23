import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";
import { Link } from "react-router-dom";
import {useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

function Main({ books, setBooks, moveShelves}) {
  useEffect(() => {
  BooksAPI.getAll().then((data)=>{
 setBooks(data)
   
 
  })
  
    return () => {
      setBooks(books)
    
    }
  }, [])
  
  return (
    <div className="list-books" onChange={(e) => e.target.value}>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={books} setBooks={setBooks} moveShelves={moveShelves}/>
          <Read books={books} setBooks={setBooks} moveShelves={moveShelves}/>
          <WantToRead books={books} setBooks={setBooks} moveShelves={moveShelves}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Main;