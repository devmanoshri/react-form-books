import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onEdit, onDelete }) {
  const renderedBook = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  // console.log(renderedBook);
  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
