import "./App.css";
import { useState, useEffect } from "react";
import Main from "./Components/Main";
import Search from "./Components/Search";
import *as BooksAPI from "./BooksAPI";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  
  const[books, setBooks]=useState([])
  

  useEffect(()=>{
    BooksAPI.getAll().then((books)=>{
      setBooks(books)
    })
  },[books.length])

  const moveShelves=(books)=>{
    BooksAPI.update().then((books)=>{
      setBooks(books)
    })
  }
return (
  <div className="app">
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Main books={books} setBooks={setBooks} moveShelves={moveShelves} />}
      />
      <Route
        path="/search"
        element={<Search books={books} setBooks={setBooks} />}
      />
    </Routes>
  </BrowserRouter>
</div>
    
  );
}

export default App;
