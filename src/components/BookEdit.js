import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.bookTitle);
  const { editBook } = useContext(BooksContext);

  const handelChange = (event) => {
    setTitle(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBook(book.id, title);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>New Title</label>
        <input className="input" value={title} onChange={handelChange} />
        <button className="button is-primary">Edit</button>
      </form>
    </div>
  );
}

export default BookEdit;
