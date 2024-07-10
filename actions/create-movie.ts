'use server';

import { createMovie } from '@/lib/airtable';
import { NewMovie } from '@/types';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createMovieAction(
  prevState: NewMovie,
  formData: FormData,
) {
  const data = {
    name: formData.get('name')?.toString() ?? '',
    heroes: formData.get('heroes')?.toString() ?? '',
    enemies: formData.get('enemies')?.toString() ?? '',
    liked: false,
    _id: Math.random().toString(),
  };

  try {
    await createMovie(data);
  } catch (error) {
    return prevState;
  }
  revalidateTag('movies');
  redirect('/movies');
}
