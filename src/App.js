import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 999), bookTitle: title },
    ];
    setBooks(updatedBook);
  };

  const editBook = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, bookTitle: newTitle };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  const deleteBook = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };
  console.log(books);
  return (
    <div className="app">
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
