'use server';

import { createMovie } from '@/lib/airtable';
import { NewMovie } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createMovieAction(
  prevState: NewMovie,
  formData: FormData,
) {
  const data = {
    name: formData.get('name')?.toString() ?? '',
    heroes: formData.getAll('heroes').join() ?? '',
    enemies: formData.getAll('enemies').join() ?? '',
    liked: false,
    _id: Math.random().toString(),
  };

  try {
    await createMovie(data);
    revalidatePath('/movies');
    redirect('/movies');
  } catch (error) {
    return prevState;
  }
}
