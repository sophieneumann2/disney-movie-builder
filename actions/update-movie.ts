'use server';

import { updateMovie } from '@/lib/airtable';
import { Movie } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateMovieAction(prevState: Movie, formData: FormData) {
  const data = {
    id: formData.get('recordId')?.toString() ?? '',
    fields: {
      name: formData.get('name')?.toString() ?? '',
      heroes: formData.getAll('heroes').join() ?? '',
      enemies: formData.getAll('enemies').join() ?? '',
      _id: formData.get('_id')?.toString() ?? '',
    },
  };

  try {
    await updateMovie([data]);
  } catch (error) {
    return prevState;
  }
  revalidatePath(`/movies/${formData.get('_id')?.toString()}`);
  redirect(`/movies/${formData.get('_id')?.toString()}`);
}
