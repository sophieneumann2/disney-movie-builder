import { getAllDisneyCharacters } from '@/lib/disney-characters';
import { DisneyCharacter } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getCharacters() {
  const response = await getAllDisneyCharacters();
  return response;
}

export default async function Characters() {
  const characters = await getCharacters();

  return (
    <div className="m-12">
      <Link href={'/'}>Back home</Link>
      <h1>Characters</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8">
        {characters?.map((character: DisneyCharacter) => (
          <Link
            key={character._id}
            href={`/characters/${character._id}`}
            className="block bg-slate-300 hover:bg-slate-200 hover:scale-105 rounded-lg p-8"
          >
            <h2>{character.name}</h2>
            <Image
              src={character.imageUrl}
              alt={character.name}
              width={150}
              height={120}
              className="my-8"
            />
            <>
              Films:{' '}
              {character.films.length ? (
                <ul>
                  {character.films.map((film: string, index: number) => (
                    <li key={`film-${film}-${index}`}>- {film}</li>
                  ))}
                </ul>
              ) : (
                '-'
              )}
            </>
          </Link>
        ))}
      </div>
    </div>
  );
}
