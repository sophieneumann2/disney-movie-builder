import BackHome from '@/components/back-home.server';
import Card from '@/components/card.server';
import { getAllMovies } from '@/lib/airtable';
import Image from 'next/image';
import Link from 'next/link';

export default async function Movies() {
  const movies = await getAllMovies();
  return (
    <div className="page-wrap">
      <BackHome />
      <h1>Movies</h1>
      <Link href={'/movies/new'} className="primary-link float-right">
        + Create new movie
      </Link>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-24">
        {movies.map((movie) => (
          <Card
            key={movie._id}
            href={`/movies/${movie._id}`}
            cardTitle={movie.name}
          >
            <div>
              {' '}
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
            </div>
            {movie.liked && (
              <Image
                src={'/static/icons/heart-filled.svg'}
                alt={'Heart filled'}
                width={30}
                height={30}
                className="float-right align-bottom block"
              />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
