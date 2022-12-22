import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  //console.log("books", books);
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      bookTitle: title,
    });
    const updatedBook = [...books, response.data];
    // const updatedBook = [
    //   ...books,
    //   { id: Math.round(Math.random() * 999), bookTitle: title },
    // ];
    setBooks(updatedBook);
  };

  const editBook = async (id, newTitle) => {
    //console.log(newTitle);
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      bookTitle: newTitle,
    });
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        // return { ...book, bookTitle: newTitle };
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  const deleteBook = async (id) => {
    axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };
  //console.log(books);
  return (
    <div className="app">
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
