import BookShow from "../components/BookShow";
function BookList({ books, onEdit, onDelete }) {
  const renderedBook = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
