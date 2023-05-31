import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
