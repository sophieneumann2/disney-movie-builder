import Link from 'next/link';
import React from 'react';

interface ICardProps {
  key: string;
  href: string;
  cardTitle: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  key,
  href,
  cardTitle,
  children,
  className,
}: ICardProps) {
  return (
    <Link
      key={key}
      href={href}
      className="card-base-styles hover:bg-slate-200 hover:scale-105"
    >
      <h2>{cardTitle}</h2>
      {children}
    </Link>
  );
}
