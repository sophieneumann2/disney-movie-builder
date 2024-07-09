import Link from 'next/link';
import React from 'react';

export default function MovieDetails(props: { params: { id: string } }) {
  const { id } = props.params;
  return (
    <div className="page-wrap">
      <Link href={'/movies'}>Back to movies</Link>
      <h1>Movie details: {id}</h1>
      <Link href={`/movies/${id}/edit`} className="primary-link">
        Edit
      </Link>
    </div>
  );
}
