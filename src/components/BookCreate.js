import { useState, useContext } from "react";
import BooksContext from "../context/books";
function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handelChange = (event) => {
    setTitle(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handelSubmit}>
        <label>Enter Title</label>
        <input className="input" value={title} onChange={handelChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
