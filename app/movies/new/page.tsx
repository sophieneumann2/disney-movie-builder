import Link from 'next/link';
import React from 'react';

export default function CreateNewMovie() {
  return (
    <div className="page-wrap">
      <Link href={'/movies'}>Back to movies</Link>
      <h1>Create a new movie</h1>
    </div>
  );
}
