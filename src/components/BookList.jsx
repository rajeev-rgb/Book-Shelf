import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

const BookList = ({ books, onDelete, onEdit }) => {
  const value = useContext(BooksContext);
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <BookShow
            key={book.id}
            book={book}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default BookList;
