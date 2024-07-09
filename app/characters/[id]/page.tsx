import Link from 'next/link';
import React from 'react';

export default function CharacterDetails(props: { params: { id: string } }) {
  return (
    <div className="page-wrap">
      <Link href={'/characters'}>Back to Characters</Link>
      <h1>Character details: {props.params.id}</h1>
    </div>
  );
}
