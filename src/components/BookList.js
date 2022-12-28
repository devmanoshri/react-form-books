import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBookContext();

  const renderedBook = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  // console.log(renderedBook);
  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
