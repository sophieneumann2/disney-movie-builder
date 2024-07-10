import DeleteMovieButton from '@/components/delete-movie-button.client';
import Like from '@/components/like.client';
import { getMovie } from '@/lib/airtable';
import Link from 'next/link';

export default async function MovieDetails(props: { params: { id: string } }) {
  const { id } = props.params;

  const movie = await getMovie(id);

  return (
    <div className="page-wrap">
      <Link className="secondary-link" href={'/movies'}>
        ← Back to movies
      </Link>

      <h1>{movie.name}</h1>
      <div className="flex items-center justify-center">
        <Like liked={!!movie.liked} id={movie._id} />
      </div>
      <div className="h-24 flex justify-between items-center gap-4">
        <DeleteMovieButton recordId={movie.recordId} />
        <Link href={`/movies/${id}/edit`} className="primary-link ">
          Edit
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-8">
        <div className="mb-8 card-base-styles">
          <h2>Heroes:</h2>
          {movie.heroes.split(', ').length ? (
            <ul>
              {movie.heroes.split(', ').map((hero: string, index: number) => (
                <li key={`hero-${hero}-${index}`}>- {hero}</li>
              ))}
            </ul>
          ) : (
            '-'
          )}
        </div>
        <div className="card-base-styles">
          <h2>Enemies:</h2>
          {movie.enemies?.split(', ').length ? (
            <ul>
              {movie.enemies.split(', ').map((enemy: string, index: number) => (
                <li key={`enemy-${enemy}-${index}`}>- {enemy}</li>
              ))}
            </ul>
          ) : (
            '-'
          )}
        </div>
      </div>
    </div>
  );
}
