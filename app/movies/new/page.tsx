import CreateMovieForm from '@/components/create-movie-form.client';
import Link from 'next/link';

export default function CreateNewMovie() {
  return (
    <div className="page-wrap">
      <Link className="secondary-link" href={'/movies'}>
        ← Back to movies
      </Link>
      <h1>Create a new movie</h1>
      <CreateMovieForm />
    </div>
  );
}
