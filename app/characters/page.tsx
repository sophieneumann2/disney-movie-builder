import Link from 'next/link';
import React from 'react';

export default function Characters() {
  const CHARACTERS = [1, 2, 3];

  return (
    <div>
      <Link href={'/'}>Back home</Link>
      <h1>Characters</h1>
      <div>
        {CHARACTERS.map((character) => (
          <Link key={character} href={`/characters/${character}`}>
            Character {character}
          </Link>
        ))}
      </div>
    </div>
  );
}
