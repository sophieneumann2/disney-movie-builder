import Link from 'next/link';
import React from 'react';

export default function Movies() {
  const MOVIES = [1, 2, 3];
  return (
    <div>
      <Link href={'/'}>Back home</Link>
      <h1>Movies</h1>
      <Link href={'/movies/new'}>Create new Movie</Link>
      <div>
        {MOVIES.map((movie) => (
          <Link key={movie} href={`/movies/${movie}`}>
            Movie {movie}
          </Link>
        ))}
      </div>
    </div>
  );
}
