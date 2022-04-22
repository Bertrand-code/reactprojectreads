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

return (
    <div className="app">
       <Main books={books}
       setBooks={setBooks} 
      /> 
      <BrowserRouter>
      <Routes>
     <Route path="/search" element    ={<Search books={books} setBooks={setBooks}/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
