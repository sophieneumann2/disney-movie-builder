'use client';

import { useState } from 'react';

export default function CreateMovieForm() {
  const [name, setName] = useState('');
  return (
    <form>
      <input
        className="block my-4 w-100 outline outline-orange-300 p-2 rounded-md"
        name="name"
        type="text"
        placeholder="Enter movie title"
        onChange={(event) => setName(event.target.value)}
        value={name}
        required
      />
      <button className="primary-link" type="submit">
        Create
      </button>
    </form>
  );
}
