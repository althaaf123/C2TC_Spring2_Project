import React from 'react';

function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Year:</b> {book.year}</p>
      <button onClick={onEdit}>✏️ Edit</button>
      <button onClick={() => onDelete(book.id)}>🗑️ Delete</button>
    </div>
  );
}

export default BookCard;
