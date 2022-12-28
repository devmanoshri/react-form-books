import { useState, createContext, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
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
  const valueToShare = {
    books: books,
    createBook,
    fetchBooks,
    deleteBook,
    editBook,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
