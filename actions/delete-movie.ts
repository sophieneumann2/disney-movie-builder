'use server';

import { deleteMovie } from '@/lib/airtable';
import { redirect } from 'next/navigation';

export async function deleteMovieAction(
  prevState: { recordId: string },
  formData: FormData,
) {
  const recordId = formData.get('recordId')?.toString();
  if (recordId) {
    await deleteMovie(recordId);
    redirect('/movies');
  }

  return prevState;
}
