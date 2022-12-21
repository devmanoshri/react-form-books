import { useState } from "react";
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handelChange = (event) => {
    setTitle(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
