import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

  const submit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author }),
    });
    router.push('/');
  };

  return (
    <form onSubmit={submit}>
      <h1>Add Book</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
      <button type="submit">Add</button>
    </form>
  );
}