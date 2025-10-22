import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, { id: books.length + 1, ...newBook }]);
      setNewBook({ title: "", author: "" });
    }
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>📚 Library Management Dashboard</h1>
        <p>Organize, Add, and Manage your library efficiently</p>
      </header>

      <div className="form-box">
        <h2>Add New Book</h2>
        <div className="form-fields">
          <input
            type="text"
            name="title"
            placeholder="Enter Book Title"
            value={newBook.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Enter Author Name"
            value={newBook.author}
            onChange={handleChange}
          />
          <button onClick={addBook}>➕ Add Book</button>
        </div>
      </div>

      <div className="book-section">
        <h2>📖 Book Collection</h2>
        <div className="book-list">
          {books.length > 0 ? (
            books.map((book) => (
              <div className="book-card" key={book.id}>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <button className="delete-btn" onClick={() => deleteBook(book.id)}>
                  🗑 Delete
                </button>
              </div>
            ))
          ) : (
            <p className="empty">No books available. Add some!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

