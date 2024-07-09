import Link from 'next/link';
import React from 'react';

export default function EditMovie(props: { params: { id: string } }) {
  const { id } = props.params;

  return (
    <div>
      <Link href={`/movies/${id}`}>Back to movie {id}</Link>
      <h1>Edit movie {id}</h1>
    </div>
  );
}
