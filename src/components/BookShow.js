import { useState } from "react";
import BookEdit from "../components/BookEdit";
function BookShow({ book, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  const handelDelete = () => {
    onDelete(book.id);
  };
  const handelEdit = () => {
    setShowEdit(!showEdit);
  };
  const handelSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  let titleContent = <h3>{book.bookTitle}</h3>;
  if (showEdit) {
    titleContent = <BookEdit book={book} onSubmit={handelSubmit} />;
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{titleContent}</div>

      <div className="actions">
        <div className="edit" onClick={handelEdit}>
          Edit
        </div>
        <div className="delete" onClick={handelDelete}>
          Delete
        </div>
      </div>
    </div>
  );
}

export default BookShow;
