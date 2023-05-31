import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    // reset the form to default
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a book</h3>
        <label>Title</label>
        <input
          className="input is-rounded"
          value={title}
          onChange={handleChange}
        />
        <button className="button is-primary">Add</button>
      </form>
    </div>
  );
};

export default BookCreate;
