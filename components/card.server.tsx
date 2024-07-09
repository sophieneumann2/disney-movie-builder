import Link from 'next/link';
import React from 'react';

interface ICardProps {
  key: string;
  href: string;
  cardTitle: string;
  children?: React.ReactNode;
}

export default function Card({ key, href, cardTitle, children }: ICardProps) {
  return (
    <Link
      key={key}
      href={href}
      className="block bg-slate-300 hover:bg-slate-200 hover:scale-105 rounded-lg p-8"
    >
      <h2>{cardTitle}</h2>
      {children}
    </Link>
  );
}
