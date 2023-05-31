import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <div>{book.title}</div>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="random-images"
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;