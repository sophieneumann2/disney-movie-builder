import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-24">
      <h1>Disney Movie Builder</h1>
      <p className="text-center mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt
        sit, excepturi labore obcaecati ut. Eaque, at ipsum, accusamus dolor
        odio id quidem vero officiis modi similique rem nisi quae!
      </p>
      <div className="flex flex-row gap-8 justify-center">
        <Link className="primary-link" href={'/characters'}>
          View all Characters
        </Link>
        <Link className="primary-link" href={'/movies'}>
          View all Movies
        </Link>
      </div>
    </main>
  );
}
