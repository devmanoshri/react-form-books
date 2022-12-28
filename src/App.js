import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import BooksContext from "./context/books";
function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  //console.log(books);
  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
