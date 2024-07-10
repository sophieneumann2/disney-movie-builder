import UpdateMovieForm from '@/components/update-movie-form.client';
import { getMovie } from '@/lib/airtable';
import Link from 'next/link';

export default async function EditMovie(props: { params: { id: string } }) {
  const { id } = props.params;
  const movie = await getMovie(id);

  return (
    <div className="page-wrap">
      <Link className="secondary-link" href={`/movies/${id}`}>
        ← Back to movie
      </Link>
      <h1>Edit movie</h1>
      <UpdateMovieForm movie={movie} />
    </div>
  );
}
