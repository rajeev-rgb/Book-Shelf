import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BooksContext from "./context/books.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BooksContext.Provider value={5}>
      <App />
    </BooksContext.Provider>
  </React.StrictMode>
);
