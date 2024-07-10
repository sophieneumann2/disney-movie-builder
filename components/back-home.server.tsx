import Link from 'next/link';

export default function BackHome() {
  return (
    <Link className="secondary-link" href={'/'}>
      ← Back home
    </Link>
  );
}
