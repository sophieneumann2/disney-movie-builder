'use server';

import { deleteMovie } from '@/lib/airtable';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteMovieAction(
  prevState: { recordId: string },
  formData: FormData,
) {
  const recordId = formData.get('recordId')?.toString();
  if (recordId) {
    await deleteMovie(recordId);
    revalidatePath('/movies');
    redirect('/movies');
  }

  return prevState;
}
