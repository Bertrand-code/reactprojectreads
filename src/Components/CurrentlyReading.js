
import Book from './Book'
function CurrentlyReading({books}) {
  
      const result=books.filter(book=>book.shelf==='currentlyReading') 
   
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {
                        result?.map(book=>(
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

export default CurrentlyReading