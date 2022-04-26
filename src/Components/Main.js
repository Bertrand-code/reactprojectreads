
import { Link } from "react-router-dom";
import Shelves from "./Shelves";


function Main({ books, setBooks, moveShelves}) {

  
  return (
    <div className="list-books" onChange={(e) => e.target.value}>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelves books={books}
                       setBooks={setBooks}
                       moveShelves={moveShelves} />
        </div>
      
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
    </div>
  );
}

export default Main;