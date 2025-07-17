import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch('/api/books');
    const data = await res.json();
    setBooks(data);
  };

  const deleteBook = async (id: number) => {
    await fetch(`/api/books/${id}`, { method: 'DELETE' });
    fetchBooks();
  };

  useEffect(() => { fetchBooks(); }, []);

  return (
    <div>
      <h1>📚 Book List</h1>
      <a href="/add">Add New Book</a>
      <ul>
        {books.map((book: any) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}