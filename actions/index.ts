'use server';

import { changeLikeStatusMovie } from '@/lib/airtable';
import { revalidatePath } from 'next/cache';

type State = {
  id: string;
  liked: boolean;
};

export async function likeMovie(prevState: State) {
  const { id } = prevState;

  const response = await changeLikeStatusMovie(id);

  if (response) {
    revalidatePath('/movies');
    return { liked: response.length ? !!response[0].liked : false, id };
  } else {
    return prevState;
  }
}
