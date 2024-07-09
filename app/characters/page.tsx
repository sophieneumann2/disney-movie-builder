import Card from '@/components/card.server';
import { getAllDisneyCharacters } from '@/lib/disney-characters';
import { DisneyCharacter } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Characters() {
  const characters = await getAllDisneyCharacters();

  return (
    <div className="page-wrap">
      <Link href={'/'}>Back home</Link>
      <h1>Characters</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8">
        {characters?.map((character: DisneyCharacter) => {
          return (
            <Card
              key={character._id}
              href={`/characters/${character._id}`}
              cardTitle={character.name}
            >
              <Image
                src={character.imageUrl}
                alt={character.name}
                width={150}
                height={120}
                className="my-8"
              />
              <div className="my-2">
                <h3>Movies:</h3>
                {character.films.length ? (
                  <ul>
                    {character.films.map((film: string, index: number) => (
                      <li key={`movie-${film}-${index}`}>- {film}</li>
                    ))}
                  </ul>
                ) : (
                  '-'
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
