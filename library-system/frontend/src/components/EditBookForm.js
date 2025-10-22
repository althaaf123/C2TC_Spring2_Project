import React, { useState } from 'react';

function EditBookForm({ book, onSave }) {
  const [form, setForm] = useState(book);

  return (
    <div className="edit-form">
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        type="number"
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
      />
      <button onClick={() => onSave(form)}>💾 Save</button>
    </div>
  );
}

export default EditBookForm;
