import Link from 'next/link';

export default function EditMovie(props: { params: { id: string } }) {
  const { id } = props.params;

  return (
    <div className="page-wrap">
      <Link className="secondary-link" href={`/movies/${id}`}>
        ← Back to movie {id}
      </Link>
      <h1>Edit movie {id}</h1>
    </div>
  );
}
