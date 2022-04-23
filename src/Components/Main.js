import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";
import { Link } from "react-router-dom";

function Main({ books, setBooks}) {
  return (
    <div className="list-books" onChange={(e) => e.target.value}>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={books} setBooks={setBooks}/>
          <Read books={books} setBooks={setBooks}/>
          <WantToRead books={books} setBooks={setBooks}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Main;