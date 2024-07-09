import Card from '@/components/card.server';
import { getAllMovies } from '@/lib/airtable';
import Link from 'next/link';
import React from 'react';

export default async function Movies() {
  const movies = await getAllMovies();
  console.log('movies:', movies);
  return (
    <div className="page-wrap">
      <Link href={'/'}>Back home</Link>
      <h1>Movies</h1>
      <Link href={'/movies/new'} className="primary-link">
        Create new Movie
      </Link>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-12">
        {movies.map((movie) => (
          <Card
            key={movie._id}
            href={`/movies/${movie._id}`}
            cardTitle={movie.name}
          >
            <div className="my-2">
              <h3>Enemies:</h3>
              {movie.enemies.split(', ').length ? (
                <ul>
                  {movie.enemies
                    .split(', ')
                    .map((enemy: string, index: number) => (
                      <li key={`enemy-${enemy}-${index}`}>- {enemy}</li>
                    ))}
                </ul>
              ) : (
                '-'
              )}
            </div>
            <div className="my-2">
              <h3>Heroes:</h3>
              {movie.heroes.split(', ').length ? (
                <ul>
                  {movie.heroes
                    .split(', ')
                    .map((hero: string, index: number) => (
                      <li key={`hero-${hero}-${index}`}>- {hero}</li>
                    ))}
                </ul>
              ) : (
                '-'
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
