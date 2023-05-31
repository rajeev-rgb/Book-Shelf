import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

const BookList = () => {
  const { books } = useContext(BooksContext);
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
